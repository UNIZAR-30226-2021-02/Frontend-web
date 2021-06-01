import Vue from 'vue'
import VueRouter from 'vue-router'
import SignInView from '../views/SignInView.vue'
import PerfilView from '../views/PerfilView.vue'
import SignUpView from '../views/SignUpView.vue'
import ShopView from '../views/ShopView.vue'
import FriendsView from '../views/FriendsView.vue'
import PartidasView from '../views/PartidasView.vue'
import LobbyView from '../views/LobbyView.vue'
import drawView from '../views/drawView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignInView',
    component: SignInView
  },
  {
    path: '/Profile',
    name: 'PerfilView',
    component: PerfilView
  },
  {
    path: '/SignUp',
    name: 'SignUpView',
    component: SignUpView

  },
  {
    path: '/Shop',
    name: 'ShopView',
    component: ShopView
  },
  {
    path: '/Friends',
    name: 'FriendsView',
    component: FriendsView
  },
  {
    path: '/Partidas',
    name: 'PartidasView',
    component: PartidasView
  },
  {
    path: '/Lobby',
    name: 'LobbyView',
    component: LobbyView
  },
  {
    path: '/Draw',
    name: 'drawView',
    component: drawView
  },
]

const router = new VueRouter({
  routes
})

export default router
