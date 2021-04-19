<template>
  <div class="LobbyView">
      <deshecho-component msg="Esto es la página de lobby"/>
      <lobby-lists-component/>
      <exit-lobby-component style="position: relative; top: 500px;"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DeshechoComponent from '../components/DeshechoComponent.vue'
import ExitLobbyComponent from '../components/ExitLobbyComponent.vue'
import LobbyListsComponent from '../components/LobbyListsComponent.vue'

export default {
  name: 'LobbyView',
  components: {
    DeshechoComponent,
    ExitLobbyComponent,
    LobbyListsComponent
  }
}
</script>