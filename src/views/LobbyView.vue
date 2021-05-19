<template>
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
</script>