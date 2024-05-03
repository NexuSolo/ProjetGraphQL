<template>
  <div>
    <!-- creer un article -->
    <router-link class="button-create" to="/creation-article">Créer un article</router-link>

  </div>

  <div>
    <div class="preview" v-for="(post, index) in posts" :key="index">
        <div class="content">
            <p>{{ post.content }}</p>
        </div>
        <div class="details">
            <p class="author">Auteur: {{ post.authorName }}</p>
            <p class="date">Date: {{ post.createdAt }}</p>
        </div>
        <!-- Redirect to /post/:id -->
        <router-link :to="{ name: 'post', params: { id: post.id } }">
            <div class="stats">
                <div class="like">
                    <img src="../assets/like.png" alt="like">
                    <p>{{ post.likes.length }}</p>
                </div>
                <div class="comment">
                    <img src="../assets/comment.png" alt="comment">
                    <p>{{ post.comments.length }}</p>
                </div>
            </div>
        </router-link>
  </div>
  </div>
</template>

<script lang="ts">

import gql from 'graphql-tag';

const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      authorId
      authorName
      content
      createdAt
      id
      comments {
        id
      }
      likes {
        id
      }
    }
  }
`;

export default {
    data() {
        return {
            posts: [],
        };
    },
    apollo: {
        getPosts: {
            query: GET_POSTS,
            update(data) {
                this.posts = data.getPosts;
                return data.getPosts;
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        next(async (vm) => {
            await vm.$apollo.queries.getPosts.refetch();
        });
    },
    mounted() {
        const postId = this.$route.params.id;
    }
};


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

.date {
    padding: 2px;
}

.preview {
    width: 50vw;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(218, 218, 218);
    border-radius: 20px;
    position: relative;
}

.titre {
    text-align: center;
    background-color: rgb(170, 170, 170);
    margin: 0;
    border-radius: 20px 20px 0 0;
    height: 5vh;
}

.titre h2 {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}

.content {
    padding-left: 2vw;
    padding-right: 2vw;
    padding-top: 1vh;
    padding-bottom: 1vh;
}

.details {
    position: relative;
    text-align: right;
    margin-right: 1vw;
    font-size: 1.5vh;
    font-style: italic;
}

.author {
    padding: 0;
    margin: 0;
}

p {
    margin: 0;
    padding: 0;
}

.stats {
    display: flex;
    justify-content: space-around;
    margin-top: 1vh;
    padding: 1vh;
    background-color: rgb(179, 179, 179);
    border-radius: 0 0 20px 20px;
}

.stats img {
    width: 2vh;
    height: 2vh;
    margin-right: 0.5vw;
}

.eye {
    opacity: 0.7;
}

</style>