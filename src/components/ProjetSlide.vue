<template>
        <div class="images" v-bind:class="dataProjet.ID" >
            <img :src="dataProjet.acf.image_du_projet.url" :alt="dataProjet.acf.image_du_projet.alt">
            <h3> {{ dataProjet.post_title }} </h3>
            <router-link :to="{
                name: 'Projet',
                params: { idProjet: dataProjet.ID, nameProjet: dataProjet.post_title, slugProjet: dataProjet.post_name, descriptionProjet: dataProjet.acf.description_du_projet, imageDuProjet: dataProjet.acf.image_du_projet.url } 
            }"> En savoir plus </router-link>
        </div>
</template>

<script>

export default {
    name : 'ProjetSlide',
    props : {
        dataProjet : Object
    }
}
</script>

<style> 


    .images {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        border-radius: 10px;
        overflow: hidden;
        z-index: 999;
    }

    .images img {   
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .5s ease-in-out;
    }

    .images h3 {
        position: absolute;
        bottom: 90px;
        text-align: center;
        width: 100%;
        color: #fff;
        opacity: 0;
        transition: all .5s ease-in-out;
    }

    .images a {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        width: 170px;
        height: 50px;
        border-radius: 5px;
        line-height: 50px;
        color: #fff;
        background: var(--color-orange);
        opacity: 0;
        transition: all .5s ease-in-out;
    }

    .images a:hover {
        background: var(--color-orange-hover);
    }

    .images:hover > img {
        transform: scale(1.2);
        filter: brightness(20%);
        transition: all 1s ease-in-out;
    }

    .images:hover > h3  {
        opacity: 1;
        transition: all .5s ease-in-out;
    }

    .images:hover > a  {
        opacity: 1;
        transition: all .5s ease-in-out;
    }

</style>