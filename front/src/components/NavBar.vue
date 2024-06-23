<template>
    <nav>
        <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li v-if="!isAuthenticated"><router-link to="/connexion">Connexion</router-link></li>
            <li class="info-user" v-else>
                <p>{{ this.username }}</p>
                <p class="deco" @click="logout"><img src="../assets/deco.png" alt=""></p>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            isAuthenticated: false,
            username: localStorage.getItem('username')
        };
    },
    mounted() {
        this.checkAuth();
        // console.log tout le local.storage
        console.log(localStorage);

        console.log(this.isAuthenticated);
        console.log(localStorage.getItem('isAuthenticated'));
        console.log(`L'utilisateur est ${this.isAuthenticated ? '' : 'non '}connecté`);
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            localStorage.setItem('isAuthenticated', 'false');
            localStorage.removeItem('username');
            this.isAuthenticated = false;
            this.$router.push('/');
        },
        checkAuth() {
            if (localStorage.getItem('isAuthenticated') === 'true') {
                this.isAuthenticated = true;
            }else {
                this.isAuthenticated = false;
            }
        },
        
    }
}
</script>

<style scoped>
nav {
    background-color: #e7e7e7;
    color: white;
    text-align: center;
    padding: 30px;
    margin: 0;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

li {
    display: inline;
    margin-right: 10px;
    padding-left: 50px;
    padding-right: 50px;
}

a,
button {
    color: black;
    text-decoration: none;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
}

.deco {
    cursor: pointer;
    margin: 0;
    padding: 0;
}

.deco img {
    width: 3vh;
    opacity: 0.5;
    margin-top: 0.5vh;
}

.info-user {
    display: flex;
    justify-content: center;
    align-items: center;
    color : black;
    margin: 0;
    padding: 0;
    gap : 10px;
}

.info-user p {
    margin: 0;
    padding: 0;
}

</style>