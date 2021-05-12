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
    