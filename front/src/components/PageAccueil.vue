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

<script>
import PreviewArticle from './PreviewArticle.vue';

export default {
  components: {
    PreviewArticle
  },
}
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