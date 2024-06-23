<template>
  <div>
    <h1>Modification du post</h1>
    <textarea v-model="post.content" @input="onContentChange" rows="1"></textarea>

    <div>
      <button class="btn-delete" @click="deletePost">Supprimer le post</button>
      <button :disabled="!contentModified" :class="{ 'btn-save': contentModified }" @click="saveChanges">Enregistrer les modifications</button>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { getPost } from '../graphql/queries';
import { editPost } from '../graphql/mutations';
import { deletePost } from '../graphql/mutations';

const getPostQuery = getPost;
const editPostQuery = editPost;
const deletePostQuery = deletePost;

export default {
  data() {
    return {
      post: {
        content: ''
      },
      originalContent: '',
      contentModified: false,
      token: localStorage.getItem('token'),
    };
  },
  apollo: {
    GetPostById: {
      query: gql(getPostQuery),
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
      const initialHeightInPx = window.innerHeight * 0.1;
      textarea.style.height = 'auto';
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
      const { data } = await this.$apollo.mutate({
        mutation: gql(deletePostQuery),
        variables: {
          postId: this.$route.params.id,
          token: this.token,
        },
      });

      if (data.deletePost.success) {
        this.$router.push('..');
      } else {
        alert(data.deletePost.message);
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du post:', error);
      alert('Erreur lors de la suppression du post.');
    }
  },
  async saveChanges() {
      try {
        const { data } = await this.$apollo.mutate({
          mutation: gql(editPostQuery),
          variables: {
            postId: this.$route.params.id,
            newContent: this.post.content,
            token: this.token,
          },
        });

        if (data.editPost.success) {
          alert('Le contenu de l\'article a été mis à jour avec succès.');
          this.$router.push('../post/'+this.$route.params.id);
        } else {
          alert(data.editPost.message);
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