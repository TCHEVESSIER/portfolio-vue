import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projets from '../views/Projets.vue'
import Projet from '../views/Projet.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/a-propos',
    name: 'About',
    component : About
  },
  {
    path: '/mes-projets',
    name: 'Projets',
    component : Projets
  },
  {
    path: '/mon-projet/:slugProjet',
    name: 'Projet',
    component : Projet,
    props: true
  },
  {
    path: '/contact-moi',
    name: 'Contact',
    component : Contact
  }
]

// Redirect to wp-admin

if(/tc-controllerAdmin/.test(window.location.href)) { window.location.href = 'https://portfolio-vue-wordpress.000webhostapp.com/wp-admin' }


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
