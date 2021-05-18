<!--template>
  <div class="PerfilView">
    <name-changer-component/>
    <navegation-menu-component/>
    <perfil-component />
  </div>
</template>

<script>
import NameChangerComponent from '../components/nameChangerComponent.vue'
import NavegationMenuComponent from '../components/NavegationMenuComponent.vue'
import PerfilComponent from '../components/PerfilComponent.vue'


export default {
  name: 'PerfilView',
  components: {
    PerfilComponent,
    NavegationMenuComponent,
    NameChangerComponent
  }
}
</script-->

<template>
  <div class="PerfilView">
    <div class="sidenav">
      <navegation-menu-component/>
    </div>
    <div class="content">
      <perfil-component />
      <!--name-changer-component/-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavegationMenuComponent from '@/components/NavegationMenuComponent.vue'
//import NameChangerComponent from '../components/nameChangerComponent.vue'
import PerfilComponent from '../components/PerfilComponent.vue'

export default {
  name: 'PerfilView',
  components: {
    NavegationMenuComponent,
    PerfilComponent,
    //NameChangerComponent

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
    