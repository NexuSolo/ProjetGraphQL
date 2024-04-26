<template>

    <div>
        <h1>Creer un article</h1>

        <!-- textarea pour rediger -->
        <div class="content">
            <input class="titre" v-model="titre" placeholder="Titre de l'article" required>
            <textarea class="contenu" v-model="article" placeholder="Contenu de l'article" required></textarea>
            <!-- publier -->
            <button class="button-submit" type="submit">Publier</button>
        </div>
    
    </div>

</template>

<script>

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