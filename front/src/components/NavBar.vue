<template>
    <nav>
        <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li v-if="isAuthenticated == false"><router-link to="/connexion">Connexion</router-link></li>
            <li v-else>
                <p class="deco" @click="logout">Déconnexion</p>
                <p class="username">{{ username }}</p>
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
            username: ''
        };
    },
    mounted() {
        this.isAuthenticated = localStorage.getItem('isAuthenticated')
        this.username = localStorage.getItem('username')
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            localStorage.setItem('isAuthenticated', false);
            this.isAuthenticated = false;
            alert("Vous êtes déconnecté")
            this.$router.push('/');
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
    color : black;
    margin: 0;
    padding: 0;
}

.username {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 20px;
    margin-top: 30px;
    color: black;
}
</style>