<template>
  <div>
    <h1>Modification de l'article</h1>
    <textarea v-model="post.content" @input="onContentChange" rows="1"></textarea>

    <div>
      <button class="btn-delete" @click="deletePost">Supprimer le post</button>
      <button :disabled="!contentModified" :class="{ 'btn-save': contentModified }" @click="saveChanges">Enregistrer les
        modifications</button>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  data() {
    return {
      post: {
        content: '' // Initialisez post avec une propriété content vide pour éviter des erreurs
      },
      originalContent: '',
      contentModified: false,
      token: localStorage.getItem('token'),
    };
  },
  apollo: {
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
          postId: this.$route.params.id
        };
      },
      update(data) {
        this.post = data.getPost;
        this.originalContent = data.getPost.content;
        return data.getPost;
      },
    },
  },
  methods: {
    adjustTextareaHeight(event) {
      const textarea = event.target;
      const initialHeightInPx = window.innerHeight * 0.1; // 10vh
      textarea.style.height = 'auto'; // Réinitialise la hauteur pour obtenir la hauteur correcte du contenu
      const contentHeight = textarea.scrollHeight;
      if (contentHeight > initialHeightInPx) {
        textarea.style.height = contentHeight + 'px';
      } else {
        textarea.style.height = '10vh';
      }
    },
    onContentChange() {
      this.contentModified = this.originalContent !== this.post.content;
      this.adjustTextareaHeight(event);
    },
    async deletePost() {
    try {
      console.log('Suppression du post:', this.$route.params.id)
      const { data } = await this.$apollo.mutate({
        mutation: gql`
          mutation DeletePost($token: String!, $postId: ID!) {
            deletePost(token: $token, postId: $postId) {
              code
              message
              success
            }
          }
        `,
        variables: {
          postId: this.$route.params.id,
          token: this.token,
        },
      });

      if (data.deletePost.success) {
        this.$router.push('/posts'); // Redirection vers la liste des articles
      } else {
        alert(data.deletePost.message); // Afficher le message d'erreur
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du post:', error);
      alert('Erreur lors de la suppression du post.');
    }
  },
  async saveChanges() {
      try {
        const { data } = await this.$apollo.mutate({
          mutation: gql`
            mutation EditPost($token: String!, $postId: ID!, $newContent: String!) {
              editPost(token: $token, postId: $postId, newContent: $newContent) {
                code
                message
                success
              }
            }
          `,
          variables: {
            postId: this.$route.params.id, // Assurez-vous que l'ID de l'article est correctement récupéré
            newContent: this.post.content, // Remplacez `this.post.content` par la bonne référence à votre contenu d'article dans le modèle de données
            token: this.token,
          },
        });

        if (data.editPost.success) {
          alert('Le contenu de l\'article a été mis à jour avec succès.');
          this.$router.push('../post/'+this.$route.params.id); // Redirection vers la liste des articles après la mise à jour
        } else {
          alert(data.editPost.message); // Afficher le message d'erreur si la mise à jour échoue
        }
      } catch (error) {
        console.error('Erreur lors de la mise à jour du post:', error);
        alert('Erreur lors de la mise à jour du post.');
      }
    },
  },
  mounted() {
    this.$apollo.queries.GetPostById.refetch();
  }
}
</script>

<style scoped>
/* Le style reste inchangé */
</style>

<style scoped>
textarea {
  width: 40vw;
  max-width: 80vw;
  height: 10vh;
  border: none;
  background: #f9f9f9;
  overflow: auto;
  outline: none;
  resize: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

textarea:focus {
  background-color: #d2d2d2;
}

.btn-delete {
  background-color: rgb(220, 122, 122);
  color: white;
}

.btn-save {
  background-color: rgb(124, 175, 124);
  color: white;
}


button {
  font-size: inherit;
  margin: 1vw;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}



button:disabled {
  background-color: grey;
  color: white;
}
</style>