<template>
  <div>
    <section class="page-home section__container">
      <div class="container mx-auto">
        <h3> Bienvenue à toi ! </h3>
        <h1> {{ pagesInfo.acf.titre }} </h1> 
        <h4> {{ pagesInfo.acf.statut }} </h4>
      </div>
    </section>
    <div class="background__fullscreen picture__theo">
      <img :src=pagesInfo.acf.image_de_fond.url :alt=pagesInfo.acf.image_de_fond.alt>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  import axios from 'axios';

  export default {
    name: 'Home',
    data: function () {
      return {
        url: 'https://portfolio-vue-wordpress.000webhostapp.com/wp-json/wp/v2/pages/2',
        pagesInfo: []
      }
    }, 
    mounted() {
      axios.get(this.url).then((response) => {
        this.pagesInfo = response.data;
      })
    },
  }

</script>

<style scoped>

  @import './../assets/css/variables.css';
  @import './../assets/css/normalize.css';

  .page-home {
    z-index: 2;
    width: 100%;
    transform: translateY(0);
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
  }
  
  .page-home h1, .page-home h3 {
    text-align: center;
  }

  .page-home h1 {
    margin-block-end: 20px;
    color: var(--color-white);
  }

  .page-home h3 {
    color: var(--color-orange);
    font-weight: 700;
    margin-block-end: 20px;
    font-family: 'Ubuntu';
  }

  .background__fullscreen {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  .background__fullscreen>img {
    height: 100vh;
    object-position: bottom center;
    display: block;
    object-fit: contain;
    margin: 0 auto;
    opacity: 0.5;
    text-align: center;
  }
</style>