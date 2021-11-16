<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import axios from 'axios';
  
  export default {
    Name: "App",

    components: {
      Header
    },

    data: function () {
      return {
        url: 'https://portfolio-vue-wordpress.000webhostapp.com/wp-json/markers/v1/portfolio',
        projets: []
      }
    },

    mounted() {
      axios.get(this.url).then((response) => {
        this.$root.projets = response.data;
      })
    },

  };

</script>

<style>

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>