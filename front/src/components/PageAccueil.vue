<template>
    <div class="buttons-up">
        <router-link class="button-create" to="/creation-article">Créer un post</router-link>
        <div class="trie">
            <select v-model="critereDeTri" @change="trierPosts">
                <option value="date">Trier par date</option>
                <option value="likes">Trier par likes</option>
            </select>
        </div>
    </div>

    <div>
        <div class="preview" v-for="(post, index) in posts" :key="index">
            <router-link :to="{ name: 'post', params: { id: post.id } }">
                <div class="content">
                    <p>{{ post.content }}</p>
                </div>
                <div class="details">
                    <p class="author">Auteur: {{ post.authorName }}</p>
                    <p class="date">Date: {{ post.createdAt }}</p>
                </div>
            </router-link>
            <div class="stats">
                <div class="like">
                    <p v-if="isLikedByCurrentUser(post)"><img src="../assets/liked.png" alt="like"></p>
                    <p v-else><img src="../assets/like.png" alt="like"></p>
                    <p>{{ post.likes.length }}</p>
                </div>
                <div class="comment">
                    <img src="../assets/comment.png" alt="comment">
                    <p>{{ post.comments.length }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import gql from 'graphql-tag';
import { getPosts } from '../graphql/queries';

const GET_POSTS = gql(getPosts);

export default {
    data() {
        return {
            posts: [],
            critereDeTri: 'date', // Ajout d'un critère de tri initial
        };
    },
    apollo: {
        getPosts: {
            query: GET_POSTS,
            update(data) {
                this.posts = data.getPosts;
                this.trierPosts(); // Trier les posts juste après les avoir récupérés
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
    },
    methods: {
        isLikedByCurrentUser(post) {
            // print l'utilisateur qui a liké le post
            return post.likes.some((like) => like.username === localStorage.getItem('username'));
        },
        trierPosts() {
            if (this.critereDeTri === 'date') {
                this.posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            } else if (this.critereDeTri === 'likes') {
                this.posts.sort((a, b) => b.likes.length - a.likes.length);
            }
        }
    },
    watch: {
        critereDeTri() {
            this.trierPosts();
        },
    },
};
</script>

<style scoped>

.buttons-up {
    display: flex;
    justify-content: space-between;
    margin-top: 2vh;
    margin-bottom: 2vh;
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
}

select {
    width: 10vw;
    height: 5vh;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(218, 218, 218);
    border-radius: 20px;
    text-decoration: none;
    color: black;
    font-size: 2vh;
    padding-top: 1vh;
    padding-bottom: 1vh;
    margin-top: 2vh;
    margin-bottom: 2vh;
    transition: 0.3s;
    border: none;
    appearance: none;
    padding: 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    display: flex;
    justify-content: right;
    text-align-last: center;
}

select:hover {
    background-color: rgb(236, 236, 236);
    cursor: pointer;
}


.like,
.comment {
    display: flex;
    justify-content: center;
    align-items: center
}

.like img,
.comment img {
    transition: 0.2s;
}

.like img:hover,
.comment img:hover {
    opacity: 0.7;
}

.button-create {

    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vw;
    height: 3vh;
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
    transition: 0.3s;

}

.button-create:hover {
    background-color: rgb(236, 236, 236);
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
    margin-bottom: 3vh;
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