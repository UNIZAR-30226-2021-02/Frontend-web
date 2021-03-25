import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MiPerfil from '../views/MiPerfil.vue'
import Registro from '../views/register'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MiPerfil',
    name: 'MiPerfil',
    component: MiPerfil
  },
  {
    path: '/register',
    name: 'register',
    component: Registro

  }
]

const router = new VueRouter({
  routes
})

export default router
