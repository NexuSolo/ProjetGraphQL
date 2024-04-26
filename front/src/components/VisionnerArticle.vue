<template>

    <div>
        <h1>Titre de l'article</h1>
        <p class="article-contenu">Contenu de l'article</p>
        <!-- likes -->
        <!-- commentaires -->
        <div class="react">
            <button class="like" type="submit"><img src="../assets/like.png" alt=""></button>
            <textarea class="texte-commenter" v-model="commentaire" placeholder="Ecrire un commentaire ..." required></textarea>
            <button class="button-commenter" type="submit"><img class="img-commentaire" src="../assets/commenter.png" alt=""></button>
        </div>

        <div class="liste-commentaires">
            <div class="commentaire">
                <h4 class="commentaire-auteur">Test</h4>
                <p class="commentaire-texte">Commentaire</p>
            </div>
        </div>
    </div>

</template>

<script>

</script>

<style scoped>

.liste-commentaires {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 47vw;
    margin-left: auto;
    margin-right: auto;
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