<template>
  <div v-if="!isUserAuthenticated">
    <h1>Connexion</h1>
    <form @submit.prevent="login">
      <div class="data">
        <div class="username">
          <label for="username">Nom d'utilisateur:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="password">
          <label for="password">Mot de passe:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
      </div>

      <div class="buttons">
        <button class="button-submit" type="submit">Se connecter</button>
        <div class="autre">
          <p>Pas de compte ?</p>
          <router-link class="button-autre" to="/inscription">S'inscrire</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  computed: {
    isUserAuthenticated() {
      return !!localStorage.getItem('token');
    }
  },
  created() {
    if (this.isUserAuthenticated) {
      this.$router.push('/');
    }
  },
  methods: {
    login() {
      this.$apollo.mutate({
        mutation: gql`
          mutation Mutation($username: String!, $password: String!) {
            signIn(username: $username, password: $password) {
              code
              message
              success
              token
              user {
                username
                id
              }
            }
          }
        `,
        variables: {
          username: this.username,
          password: this.password
        }
      }).then(({ data }) => {
        this.saveUserDate(data.signIn.user.id, data.signIn.token);
        localStorage.setItem('isAuthenticated', 'true');
        this.$emit('update:isAuthenticated', true);
        console.log(data.signIn.user.username + ' is connected');
        this.$router.push('/').then(() => {
          location.reload();
        });
      }).catch((error) => {
        console.error(error);
      });
    },
    saveUserDate(id, token) {
      localStorage.setItem('token', token);
      localStorage.setItem('id', id);
      this.$root.$data.userId = localStorage.getItem('id');
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 45vh;
  margin: 0 auto;
  background-color: rgb(209, 209, 209);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  border-radius: 10px;
}

.data {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  margin-bottom: 8vh;

}

.username,
.password {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

label {
  width: 40%;
}

.button-submit {
  background-color: rgb(228, 228, 228);
  color: rgb(0, 0, 0);
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.buttons {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 80%;
  height: 20%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.button-autre {
  font-size: 1.5vh;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
}

input {
  padding: 5px;
  border-radius: 5px;
  border: none;
  margin-left: 5px;
  margin-right: 5px;
  width: 60%;
}

.autre {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1.5vh;
}
</style>