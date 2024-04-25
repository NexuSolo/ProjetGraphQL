<template>
    <nav>
        <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/connexion">Connexion</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
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
}

li {
    display: inline;
    margin-right: 10px;
    padding-left: 50px;
    padding-right: 50px;
}

a {
    color: black;
    text-decoration: none;
}

</style>
