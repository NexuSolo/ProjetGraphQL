<template>
    <div>
      <h1>Contenu de l'article</h1>
      <p>{{ post.content }}</p>
    </div>
  </template>
  
  <script>
import gql from 'graphql-tag';

export default {
  data() {
    return {
      post: null, // Assurez-vous que post est initialisé à null ou à un objet vide
      token: localStorage.getItem('token'),
    };
  },
  apollo: {
    // Utilisez un nom de requête qui correspond à votre cas d'utilisation, par exemple GetPostById
    GetPostById: {
      query: gql`
        query GetPost($postId: ID!) {
          getPost(postId: $postId) {
            authorName
            authorId
            content
            createdAt
            comments {
              postId
              id
              content
              authorName
              authorId
            }
            likes {
              username
              id
            }
          }
        }
      `,
      variables() {
        return {
          postId: this.$route.params.id // Assurez-vous de récupérer l'ID du post depuis les paramètres de route
        };
      },
      update(data) {
        this.post = data.getPost; // Mettez à jour la propriété post avec les données récupérées
        return data.getPost;
      },
    },
  },
  mounted() {
    // Assurez-vous que la requête Apollo est exécutée pour récupérer les données du post
    this.$apollo.queries.GetPostById.refetch();
  }
}
</script>