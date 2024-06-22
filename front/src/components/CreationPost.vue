<template>

    <div>
        <h1>Creer un post</h1>

        <!-- textarea pour rediger -->
        <form @submit.prevent="createPost">
            <div class="content">
                <textarea class="contenu" v-model="content" placeholder="Contenu du post" required></textarea>
                <!-- publier -->
                <button class="button-submit" type="submit">Créer le post</button>
            </div>
        </form>
    
    </div>

</template>

<script>
import gql from 'graphql-tag';
import { createPost } from '../graphql/mutations';

const createPostQuery = createPost;

export default {
    data() {
        return {
            content: '',
            token: localStorage.getItem('token')
        };
    },
    // Requête pour créer un article
    methods: {
        createPost: async function(){
            await this.$apollo.mutate({
                mutation: gql(createPostQuery),
                variables: {
                    content: this.content,
                    token: this.token
                }
            }).then(({ data }) => {
                this.$router.push('/');
            }).catch((error) => {
                console.error(error);
            });
        }
    }
};
</script>

<style scoped>

textarea, input {
    width: 80vw;
    resize: none;
    border-radius: 10px;
    border : none;
    background-color: rgb(233, 233, 233);
    font-size: 1.5vh;
    padding: 1vw;
    margin: 2vh;
    font-family: Arial, sans-serif;
}

textarea {
    height: 50vh;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button-submit {
    background-color: #67aa69;
    color: white;
    padding: 14px 20px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2vh;
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;
    padding-left: 2vw;
    padding-right: 2vw;
    transition: 0.2s;
}

.button-submit:hover {
    background-color: #79be7c;
}

</style>