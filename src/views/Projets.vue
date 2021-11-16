<template>
    <section class="page-projets section__container">
        <div class="projets__container">
            <div class="container">
                <h1> Mes projets </h1>
                <hooper :settings="hooperSettings">
                    <slide v-for="projet in $root.projets" :key="projet.ID">
                        <div :class="projet.ID " class="projets">
                            <ProjetSlide :data-projet=projet />
                        </div> 
                    </slide>
                </hooper>
            </div>
        </div>
    </section>
</template>

<script>

    import ProjetSlide from '../components/ProjetSlide.vue'
    import { Hooper, Slide } from 'hooper/dist/hooper';
    import 'hooper/dist/hooper.css';

    export default {
        name: 'Projets',
        components: {
            ProjetSlide,
            Hooper,
            Slide
        },
        data() {
            return {
                hooperSettings: {
                    infiniteScroll: false,
                    centerMode: true,
                    autoPlay: false,
                    playSpeed: 3500,
                    breakpoints: {
                        2400: {
                            itemsToShow: 5
                        },
                        1800: {
                            itemsToShow: 4
                        },
                        1500: {
                            itemsToShow: 4
                        },
                        1100: {
                            itemsToShow: 2.5
                        },
                        0: {
                            itemsToShow: 1.5
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="css">

    @import './../assets/css/variables.css';
    @import './../assets/css/normalize.css';


    .page-projets {
        height: calc(100vh - 120px);
        padding-top: 0 !important;
    }

    .page-projets:focus-visible, .projets__container:focus-visible, .projets__container .container:focus-visible, .hooper:focus-visible {
        outline: none;
        border: none;
    }

    .section__container .projets__container, .container, .hooper, .hooper-list, hooper-track, .hooper-slide  {
        height: 100%;
    }

    .hooper-slide {
        width: 450px !important;
        height: 450px;
        padding: 15px;
                margin-top: 50px;
    }

    .projets {
        height: 100%;
    }

    .hooper-track {
        position: relative;
        right: 460px;
        cursor: grab;
    }

    .page-projets h1 {
        color: var(--color-orange);
    }

</style>