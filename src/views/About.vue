<template>
  <section class="page-about section__container">
    <div class="section__up mini__biography">
      <div class="container mx-auto">
        <div class="row">
          <div class="left-side col-12 col-lg-6">
          <h1> {{ pagesInfo.acf.section_minidescription.titre }} </h1>
          <div class="description" v-html="pagesInfo.acf.section_minidescription.texte_description"></div>
        </div>
        <div class="right-side col-12 col-md-6">
          <img :src="pagesInfo.acf.section_minidescription.image.url" :alt="pagesInfo.acf.section_minidescription.image.alt">
        </div>
        </div>
      </div>
    </div>
    <div class="section__down biographie">
      <div class="container mx-auto">
          <div class="row">
            <div class="description col-12" v-html="pagesInfo.acf.section_biographie.contenu_biographie"></div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
  // @ is an alias to /src

  import axios from 'axios';

  export default {
    name: 'About',
    data: function () {
      return {
        url: 'https://portfolio-vue-wordpress.000webhostapp.com/wp-json/wp/v2/pages/30',
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

<style lang="css" scoped>

  @import './../assets/css/variables.css';
  @import './../assets/css/normalize.css';

  /* About vue */

.page-about {
    height: 100%;
    padding-bottom: 50px;
}

.page-about img {
  object-fit: cover;
}

.section__up, .section__down {
    padding-left: 50px;
}

.section__up .row {
  align-items: center;
}

.section__up .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.section__up .container .left-side .description p {
    color: var(--color-black) !important;
}

.section__down .description h2 {
  margin-bottom: 50px;
  color: var(--color-orange);
}

.section__down {
  margin-top: 50px;
}



</style>
