<template>
  <div class="PerfilView">
    <div class="sidenav">
      <navegation-menu-component page="PROFILE"/>
    </div>
    <div class="content">
      <perfil-component/>
    </div>
    <logout-component class="salir"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavegationMenuComponent from '@/components/NavegationMenuComponent.vue'
import LogoutComponent from '../components/logoutComponent.vue'
import PerfilComponent from '../components/PerfilComponent.vue'

export default {
  name: 'PerfilView',
  components: {
    NavegationMenuComponent,
    PerfilComponent,
    LogoutComponent

  }
}
</script>

<style scoped>
  @media screen {
    html, body{
      background-color: grey;
      position: absolute;
      height: 100%;
      width: 100%;
    }

    /* Style the side navigation */
    .sidenav {
      float: left;
      background-color: white;
      border-radius: 30px;
      margin-top: 5%;
      margin-left: 3%; 
    }

    /* Style the content */
    .content {
      display: inline-block;
      margin-top: 3%;
    }

    .salir{
      position: fixed;
      top: 16%;
      right: 14%;
    }

    .PerfilView{
      border: 5px solid rgb(49, 49, 49);
      position: absolute;
      margin-left:10%;
      margin-right: 10%;
      margin-top: 5%;
      background-color: #17151c ;
      border-radius: 25px;
      width: 80%;
      height: 80%;
    }
  }
</style>
    