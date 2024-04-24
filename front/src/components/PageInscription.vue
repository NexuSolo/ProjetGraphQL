<template>
    <div>
      <h1>Inscription</h1>
      <form @submit.prevent="register">
        <div>
          <label for="username">Nom d'utilisateur:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div>
          <label for="password">Mot de passe:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">S'inscrire</button>
        <!-- se connecter -->
        <div>
          <p>Déjà un compte ?</p>
          <router-link to="/connexion">Se connecter</router-link>
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
      register() {
        // Simuler une inscription en affichant les informations d'inscription
        console.log('Nom d\'utilisateur:', this.username);
        console.log('Mot de passe:', this.password);
        // Ici, vous pouvez ajouter la logique d'inscription réelle, comme l'envoi des informations d'inscription à votre backend
      }
    }
  }
  </script>
  
  <style scoped>
  /* Styles spécifiques à cette page d'inscription */
  </style>
  