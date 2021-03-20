import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MiPerfil from '../views/MiPerfil.vue'

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
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
