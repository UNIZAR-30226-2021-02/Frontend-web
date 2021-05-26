<!--template>
  <div class="LobbyView">
      <deshecho-component msg="Esto es la página de lobby"/>
      <navegation-menu-component/>
      <lobby-lists-component/>
      <exit-lobby-component style="position: relative; top: 500px;"/>
      <start-game-component style="position: relative; top: 400px;"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DeshechoComponent from '../components/DeshechoComponent.vue'
import ExitLobbyComponent from '../components/ExitLobbyComponent.vue'
import LobbyListsComponent from '../components/LobbyListsComponent.vue'
import NavegationMenuComponent from '../components/NavegationMenuComponent.vue'
import StartGameComponent from '../components/StartGameComponent.vue'

export default {
  name: 'LobbyView',
  components: {
    DeshechoComponent,
    ExitLobbyComponent,
    LobbyListsComponent,
    StartGameComponent,
    NavegationMenuComponent
  }
}
</script-->

<template>
  <div class="LobbyView">
    <div class="sidenav">
      <navegation-menu-component page="PARTIDAS"/>
    </div>
    <div class="content">
        <lobby-lists-component/>
        <start-game-component/>
        <exit-lobby-component/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavegationMenuComponent from '@/components/NavegationMenuComponent.vue'
import StartGameComponent from '../components/StartGameComponent.vue'
import ExitLobbyComponent from '../components/ExitLobbyComponent.vue'
import LobbyListsComponent from '../components/LobbyListsComponent.vue'

export default {
  name: 'LobbyView',
  components: {
    NavegationMenuComponent,
    LobbyListsComponent,
    StartGameComponent,
    ExitLobbyComponent,
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

    .LobbyView{
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
    