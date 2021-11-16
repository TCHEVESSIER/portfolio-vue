<template>
    <section class="page-projet section__container">
        <div class="projets__container">
            <div class="container">
                <h1> {{ this.nomProjet }} </h1>
                <img :src="this.imageDuProjet" :alt="this.slugProjet">
                <div v-html="this.descriptionProjet" class="content"></div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Projet',
        created() {
            this.idProjet = this.$route.params.idProjet,
            this.slugProjet = this.$route.params.slugProjet
            this.nomProjet = this.$route.params.nameProjet
            this.descriptionProjet = this.$route.params.descriptionProjet
            this.imageDuProjet = this.$route.params.imageDuProjet
        }
    }
</script>

<style lang="css">

    @import './../assets/css/variables.css';
    @import './../assets/css/normalize.css';


    .page-projet {
        height: calc(100vh - 120px);
        height: 100%;
        padding-top: 0 !important;
    }

    .page-projet h1 {
        color: var(--color-orange);
    }

    .page-projet img {
        width: 100%;
        max-width: 1150px;
        display: block;
        margin-top: 50px;

    }

    .content {
        margin-top: 20px;
        width: 100%;
        max-width: 1150px;
    }

</style>