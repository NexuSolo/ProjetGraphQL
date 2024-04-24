<template>
    <div>
      <h1>Page d'accueil</h1>
      
      <!-- creer un article -->
        <router-link to="/creation-article">Créer un article</router-link>
    </div>

    <div>

        <!-- visionner un article -->
        <router-link to="/visionner-article/:id"><PreviewArticle></PreviewArticle></router-link>
    </div>
  </template>
  
  <script>
import PreviewArticle from './PreviewArticle.vue';

  export default {
    components: {
        PreviewArticle
    },
  }
  </script>
  
  <style scoped>
  
  </style>
  