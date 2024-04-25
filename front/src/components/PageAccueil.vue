<template>
  <div>
    <!-- creer un article -->
    <router-link class="button-create" to="/creation-article">Créer un article</router-link>

  </div>

  <div>

    <!-- visionner un article -->
    <router-link to="/visionner-article/:id">
      <PreviewArticle></PreviewArticle>
    </router-link>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import PreviewArticle from './PreviewArticle.vue';

export default defineComponent({
  components: {
    PreviewArticle
  },
  name: 'HomeView',
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      const query = `
        query {
          getPosts {
            authorName
            comments {
              authorName
              content
              id
              postId
            }
            content
            createdAt
            id
            likes {
              username
              id
            }
          }
        }
      `;
      try {
        const response = await fetch('http://localhost:4000/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });
        console.log('response:', response.json());
      } catch (error) {
        console.error('Erreur lors de la récupération des posts:', error);
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
});


</script>

<style scoped>

.button-create{

  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 3vh;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(218, 218, 218);
  border-radius: 20px;
  text-decoration: none;
  color: black;
  font-size: 2vh;
  text-align: center;
  padding-top: 1vh;
  padding-bottom: 1vh;
  margin-top: 2vh;
  margin-bottom: 2vh;

}


</style>