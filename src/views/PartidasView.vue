<!--template>
  <div class="PartidasView">
      <deshecho-component msg="Esto es la página de partidas"/>
      <navegation-menu-component/>
      <partidas-creator-component/>
      <partida-lists-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavegationMenuComponent from '@/components/NavegationMenuComponent.vue'
import DeshechoComponent from '../components/DeshechoComponent.vue'
import PartidasCreatorComponent from '../components/PartidasCreatorComponent.vue'
import PartidaListsComponent from '../components/PartidaListsComponent.vue'

export default {
  name: 'PartidasView',
  components: {
    NavegationMenuComponent,
    DeshechoComponent,
    PartidasCreatorComponent,
    PartidaListsComponent
  }
}
</script-->

<template>
  <div class="PartidasView">
    <div class="sidenav">
      <navegation-menu-component page="PARTIDAS"/>
    </div>
    <div class="content">
      <partidas-creator-component/>
      <partida-lists-component/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavegationMenuComponent from '@/components/NavegationMenuComponent.vue'
import PartidasCreatorComponent from '../components/PartidasCreatorComponent.vue'
import PartidaListsComponent from '../components/PartidaListsComponent.vue'

export default {
  name: 'PartidasView',
  components: {
    NavegationMenuComponent,
    PartidasCreatorComponent,
    PartidaListsComponent
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
    }

    /* Style the content */
    .content {
      display: inline-block;
      margin-top: 3%;
    }

    .PartidasView{
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
    