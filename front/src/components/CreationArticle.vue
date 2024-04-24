<template>

    <div>
        <h1>Creer un article</h1>

        <!-- textarea pour rediger -->
        <div>
            <textarea id="article" v-model="article" required></textarea>
            <!-- publier -->
            <button type="submit">Publier</button>
        </div>
    
    </div>

</template>

<script>

</script>

<style scoped>

textarea {
    width: 80vw;
    height: 50vh;
}

</style>