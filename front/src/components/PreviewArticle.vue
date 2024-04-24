<template>

    <div class="preview">
        <!-- titre de l'article -->
        <h2>{{ article.title }}</h2>

        <!-- contenu de l'article -->
        <p>{{ article.content }}</p>

        <!-- auteur de l'article -->
        <p>Par {{ article.author }}</p>

        <!-- date de publication de l'article -->
        <p>Publié le {{ article.date }}</p>
    </div>

</template>

<script>

export default {
    // Composant de la page de prévisualisation de l'article
    data() {
        return {
            article: {
                title: 'Titre de l\'article',
                content: 'Contenu de l\'article',
                author: 'Auteur de l\'article',
                date: 'Date de publication de l\'article'
            }
        };
    }
}

</script>

<style scoped>

.preview {
    width: 30vw;
    height: auto;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(218, 218, 218);
    border-radius: 20px;
}
</style>