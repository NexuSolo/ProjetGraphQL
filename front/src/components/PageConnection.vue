<template>
  <div>
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
        <button class="button-connexion" type="submit">Se connecter</button>
        <div class="pas-de-compte">
          <p>Pas de compte ?</p>
          <router-link class="button-inscription" to="/inscription">S'inscrire</router-link>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Simuler une connexion en affichant les informations de connexion
      console.log('Nom d\'utilisateur:', this.username);
      console.log('Mot de passe:', this.password);
      // Ici, vous pouvez ajouter la logique de connexion réelle, comme l'envoi des informations de connexion à votre backend
    }
  }
}
</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 45vh;
  margin: 0 auto;
  background-color: rgb(209, 209, 209);
  padding: 10px;
  display : flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  border-radius: 10px;
}

.data{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  margin-bottom: 8vh;

}

.username, .password {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

label{
  width: 40%;
}

.button-connexion{
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

.buttons{
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 80%;
  height: 20%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.button-inscription{
  font-size: 1.5vh;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
}

input{
  padding: 5px;
  border-radius: 5px;
  border: none;
  margin-left: 5px;
  margin-right: 5px;
  width: 60%;
}

.pas-de-compte{
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1.5vh;
}




</style>