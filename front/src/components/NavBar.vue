<template>
    <nav>
        <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li v-if="!isAuthenticated"><router-link to="/connexion">Connexion</router-link></li>
            <li v-else><p class="deco" @click="logout">Déconnexion</p></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            isAuthenticated: false,
        };
    },
    mounted() {
        this.checkAuth();
        console.log(this.isAuthenticated);
        console.log(localStorage.getItem('isAuthenticated'));
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            localStorage.setItem('isAuthenticated', 'false');
            this.isAuthenticated = false;
            this.$router.push('/');
        },
        checkAuth() {
            if (localStorage.getItem('isAuthenticated')) {
                this.isAuthenticated = true;
            } else {
                this.isAuthenticated = false;
            }
        }
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
</style>