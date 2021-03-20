<!--template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
</style-->

<template>
  <div id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <!--HelloWorld/-->
    <signin/>
    <!--button @click="goTo('./components/HelloWorld.vue')">Main Page</button>
    <button @click="goTo('./components/singUp.vue')">Register</button>
    <app-router></app-router-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Signin from './components/SignIn.vue';
//import AppRouter from './components/Router.vue'
//import singUp from './components/singUp.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Signin,
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

