<template>

    <div>
        <p class="article-contenu">{{ post.content }}</p>

        <div class="react">
            <button class="like" type="submit" v-on:click="like"><img src="../assets/like.png" alt=""></button>

            <form @submit.prevent="createComment" class="commenter">
                <textarea class="texte-commenter" v-model="text" placeholder="Ecrire un commentaire ..." required></textarea>
                <button class="button-commenter" type="submit"><img class="img-commentaire" src="../assets/commenter.png" alt=""></button>
            </form>
        </div>

        <div class="liste-commentaires">
            <div class="commentaire" v-for="(comment, index) in post.comments" :key="index">
                <h4 class="commentaire-auteur">{{ comment.authorName }}</h4>
                <p class="commentaire-texte">{{ comment.content }}</p>
            </div>
        </div>
    </div>

</template>

<script>
import gql from 'graphql-tag';

export default {
    data() {
        return {
            post: [],
            token: localStorage.getItem('token'),
            text: ''
        };
    },

    apollo: {
        GetPost: {
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
                }
            },
            update(data){ 
                this.post = data.getPost;
                return data.getPost;
            },
        },
    },

    methods: {
        like() {
            this.$apollo.mutate({
                mutation: gql`
                    mutation LikePost($token: String!, $postId: ID!) {
                        likePost(token: $token, postId: $postId) {
                            code
                            message
                            success
                        }
                    }
                `,
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
                this.$router.push('/');
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
}

</script>

<style scoped>

.commenter{
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
    margin-left: auto;
    margin-right: auto;
    font-size: 1.5vh;
    font-family: Arial, sans-serif;
    background-color: rgb(233, 233, 233);
    padding: 1vw;
    border-radius: 10px;
    text-align: justify;
}

.react{
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

textarea, input {
    width: 50vw;
    resize: none;
    border-radius: 10px;
    border : none;
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


img{
    width: 2vw;
    height: 2vw;
    opacity: 0.7;
}



</style>