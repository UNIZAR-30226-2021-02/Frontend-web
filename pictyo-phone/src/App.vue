<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld/>
    <!--button @click="goTo('./components/HelloWorld.vue')">Main Page</button>
    <button @click="goTo('./components/singUp.vue')">Register</button>
    <app-router></app-router-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import AppRouter from './components/Router.vue'
//import singUp from './components/singUp.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    //AppRouter,
    //singUp
  },
  methods: {
    goTo(route){
      window.location=route;
    }
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
