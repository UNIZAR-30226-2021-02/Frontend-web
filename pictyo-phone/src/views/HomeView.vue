<template>
  <div class="HomeView">
    <div class="sidenav">
      <navegation-menu-component/>
    </div>
    <div class="content">
        <!--deshecho-component msg="Esto es la página de home"/>
        <logout-component/-->
        <img src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavegationMenuComponent from '@/components/NavegationMenuComponent.vue'
//import DeshechoComponent from '../components/DeshechoComponent.vue'
//import LogoutComponent from '../components/logoutComponent.vue'

export default {
  name: 'HomeView',
  components: {
    NavegationMenuComponent,
    //DeshechoComponent,
    //LogoutComponent
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
      border-radius: 20px;
      margin-top: 5%;
      margin-left: 3%;
      border: 5px solid blueviolet;
    }

    /* Style the content */
    .content {
      display: inline-block;
      margin-top: 3%;
    }

    .HomeView{
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
    