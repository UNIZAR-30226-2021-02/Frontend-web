<template>
  <div class="FriendsView">
      <deshecho-component msg="Esto es la página de amigos"/>
      <navegation-menu-component/>
      <friend-searcher-component/>
      <friend-request-component/>
      
  </div>
</template>

<script>
// @ is an alias to /src
import NavegationMenuComponent from '@/components/NavegationMenuComponent.vue'
import DeshechoComponent from '../components/DeshechoComponent.vue'
import friendSearcherComponent from '../components/friendSearcherComponent.vue'
import FriendRequestComponent from '../components/friendRequestComponent.vue'

export default {
  name: 'FriendsView',
  components: {
    NavegationMenuComponent,
    DeshechoComponent,
    friendSearcherComponent,
    FriendRequestComponent
  }
}
</script>