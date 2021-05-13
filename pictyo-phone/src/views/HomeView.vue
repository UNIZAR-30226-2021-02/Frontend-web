<template>
  <div class="HomeView">
      <deshecho-component msg="Esto es la página de home"/>
      <navegation-menu-component/>
      <logout-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavegationMenuComponent from '@/components/NavegationMenuComponent.vue'
import DeshechoComponent from '../components/DeshechoComponent.vue'
import LogoutComponent from '../components/logoutComponent.vue'

export default {
  name: 'HomeView',
  components: {
    NavegationMenuComponent,
    DeshechoComponent,
    LogoutComponent
  }
}
</script>

<style scoped>
  .HomeView{
    border: 5px solid rgb(49, 49, 49);
    position: absolute;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 50px;
    background-color: red /*#17151c*/;
    border-radius: 25px;
  }

  html, body{
    background-color: grey;
  }
</style>
    