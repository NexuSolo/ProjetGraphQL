<template>

    <div class="preview">
        <div class="titre">
            <h2>{{ article.title }}</h2>
        </div>
        <!-- titre de l'article -->

        <div class="content">
            <!-- contenu de l'article -->
            <p>{{ previewContent }}</p>
        </div>

        <div class="details">
            <div class="author">
                <!-- auteur de l'article -->
                <p>Par {{ article.author }}</p>
            </div>
    
            <div class="date">
                <!-- date de publication de l'article -->
                <p>Publié le {{ article.date }}</p>
            </div>
        </div>

        <div class="stats">
            <!-- statistiques de l'article -->
            <p><img class="eye" src="../assets/eye.png" alt=""> 0</p>
            <p><img class="like" src="../assets/like.png" alt=""> 0</p>
            <p><img class="comment" src="../assets/comment.png" alt=""> 0</p>
        </div>

    </div>

</template>

<script>

export default {
    // Composant de la page de prévisualisation de l'article
    data() {
        return {
            article: {
                title: 'Titre de l\'article',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                author: 'Auteur de l\'article',
                date: 'Date de publication de l\'article'
            },
            previewContent: ''
        };
    },
    mounted() {
        this.reduceContentForPreview();
    },
    methods: {
        reduceContentForPreview() {
            const maxLength = 300;
            if (this.article.content.length > maxLength) {
                this.previewContent = this.article.content.substring(0, maxLength) + '...';
            } else {
                this.previewContent = this.article.content;
            }
        }
    }
};


</script>

<style scoped>

.date{
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

.titre{
    text-align: center;
    background-color: rgb(170, 170, 170);
    margin: 0;
    border-radius: 20px 20px 0 0;
    height: 5vh;
}

.titre h2{
    position: relative;
    top : 50%;
    transform: translateY(-50%);
}

.content{
    padding-left: 2vw;
    padding-right: 2vw;
    padding-top: 1vh;
    padding-bottom: 1vh;
}

.details{
    position: relative;
    text-align: right;
    margin-right: 1vw;
    font-size: 1.5vh;
    font-style: italic;
}

.author{
    padding: 0;
    margin: 0;
}

p{
    margin: 0;
    padding: 0;
}

.stats{
    display: flex;
    justify-content: space-around;
    margin-top: 1vh;
    padding: 1vh;
    background-color: rgb(179, 179, 179);
    border-radius: 0 0 20px 20px;
}

.stats img{
    width: 2vh;
    height: 2vh;
    margin-right: 0.5vw;
}

.eye{
    opacity: 0.7;
}


</style>