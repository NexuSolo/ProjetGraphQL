<template>
    <div>
        <div class="content">
            <p class="article-contenu">{{ post.content }}</p>
            <button class="edit-button" v-if="this.username === this.author" @click="editArticle(post.id)"><img src="../assets/edit.png" alt=""></button>
        </div>

        <div class="react">
            <button  v-if="isLikedByCurrentUser(post)" class="like" type="submit" v-on:click="like"><img src="../assets/liked.png" alt=""></button>
            <button  v-else class="like" type="submit" v-on:click="like"><img src="../assets/like.png" alt=""></button>

            <form @submit.prevent="createComment" class="commenter">
                <textarea class="texte-commenter" v-model="text" placeholder="Ecrire un commentaire ..."
                    required></textarea>
                <button class="button-commenter" type="submit"><img class="img-commentaire"
                        src="../assets/commenter.png" alt=""></button>
            </form>
        </div>

        <div class="liste-commentaires">
            <div class="commentaire" v-for="(comment, index) in reversedComments" :key="index">
                <h4 class="commentaire-auteur">{{ comment.authorName }}</h4>
                <p class="commentaire-texte">{{ comment.content }}</p>
            </div>
        </div>
    </div>

</template>

<script>
import gql from 'graphql-tag';
import { getPost } from '../graphql/queries';
import { likePost } from '../graphql/mutations';
import { createComment } from '../graphql/mutations';

const getPostQuery = getPost;
const likePostQuery = likePost;
const createCommentQuery = createComment;

export default {
    data() {
        return {
            post: [],
            token: localStorage.getItem('token'),
            text: '',
            author: null,
            username: localStorage.getItem('username')
        };
    },

    computed: {
        reversedComments() {
            if (this.post && this.post.comments) {
                return [...this.post.comments].reverse();
            }
            return [];
        }
    },

    apollo: {
        GetPost: {
            query: gql(getPostQuery),
            variables() {
                return {
                    postId: this.$route.params.id
                }
            },
            update(data) {
                this.post = data.getPost;
                console.log(data.getPost.authorName);
                this.author = data.getPost.authorName;
                return data.getPost;
            },
        },
    },
    mounted() {
        console.log(this.username);
    },
    methods: {
        isLikedByCurrentUser(post) {
            return post.likes.some((like) => like.id === localStorage.getItem('userId'));
        },
        like() {
            this.$apollo.mutate({
                mutation: gql(likePostQuery),
                variables: {
                    postId: this.$route.params.id,
                    token: this.token
                }
            }).then(({ data }) => {
                console.log(data.likePost.message);
            }).catch((error) => {
                console.error(error);
            });
        },
        editArticle(id) {
            this.$router.push({ name: 'EditArticle', params: { id: id } }).then(() => {
                location.reload();
            });
        },
        createComment() {
            this.$apollo.mutate({
                mutation: gql`
                    mutation CreateComment($token: String!, $text: String!, $postId: ID!) {
                        createComment(token: $token, text: $text, postId: $postId) {
                            code
                            message
                            success
                        }
                    }
                `,
                variables: {
                    postId: this.$route.params.id,
                    token: this.token,
                    text: this.text
                }
            }).then(({ data }) => {
                console.log(data.createComment.message);
                this.$router.push(this.$route.params.id).then(() => {
                    location.reload();
                });
            }).catch((error) => {
                console.error(error);
            });
        }
    },
    beforeRouteEnter(to, from, next) {
        next(async (vm) => {
            await vm.$apollo.queries.GetPost.refetch();
        });
    },
    created() {
        // Supposons que l'identifiant de l'utilisateur est stocké dans le localStorage sous la clé 'userId'
        this.userId = localStorage.getItem('username');
    }
}
</script>

<style scoped>



.content{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    margin-top: 3vh;
}

.edit-button{
    background-color: rgb(233, 233, 233);
    border: none;
    cursor: pointer;
    border-radius: 10px;
    padding: 1vh;
    transition: 0.2s;
}

.edit-button:hover {
    background-color: #cecece;
}


.commenter {
    position: absolute;
    display: flex;
    align-items: center;
    width: 80%;
    right: 0;
}

.liste-commentaires {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 47vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3vh;
    background-color: rgb(233, 233, 233);
    padding: 1vw;
    border-radius: 10px;
}

.commentaire {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.5vh;
    font-family: Arial, sans-serif;
    background-color: rgb(245, 245, 245);
    padding: 1vw;
    border-radius: 10px;
    text-align: justify;
    margin-top: 0.5vh;
    margin-bottom: 0.5vh;
}

.commentaire-auteur {
    font-weight: bold;
    margin: 0;
    padding: 0;
}

.commentaire-texte {
    margin: 0;
    padding: 0.2vh;
}

.article-contenu {
    width: 47vw;
    font-size: 1.5vh;
    font-family: Arial, sans-serif;
    background-color: rgb(233, 233, 233);
    padding: 1vw;
    border-radius: 10px;
    text-align: justify;
}

.react {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 53vw;

}

.like {
    background-color: rgb(233, 233, 233);
    color: white;
    padding: 14px 20px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;
    padding-left: 2vw;
    padding-right: 2vw;
    transition: 0.2s;
    margin: 2vw;
}

.like:hover {
    background-color: #d8b3b3;
}

textarea,
input {
    width: 50vw;
    resize: none;
    border-radius: 10px;
    border: none;
    background-color: rgb(233, 233, 233);
    font-size: 1.5vh;
    padding: 1vw;
    margin: 2vh;
    font-family: Arial, sans-serif;
}

.button-commenter {
    background-color: rgb(233, 233, 233);
    padding: 14px 20px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;
    padding-left: 2vw;
    padding-right: 2vw;
    transition: 0.2s;
    margin: 2vw;
}

.button-commenter:hover {
    background-color: #cecece;
}


img {
    width: 2vw;
    height: 2vw;
    opacity: 0.7;
}
</style>