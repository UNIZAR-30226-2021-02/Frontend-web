<template>
  <div class="HomeView">
      <deshecho-component msg="Esto es la página de home"/>
      <navegation-menu-component/>
      <home-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavegationMenuComponent from '@/components/NavegationMenuComponent.vue'
import DeshechoComponent from '../components/DeshechoComponent.vue'
import HomeComponent from '../components/homeComponent.vue'

export default {
  name: 'HomeView',
  components: {
    NavegationMenuComponent,
    DeshechoComponent,
    HomeComponent
  }
}
</script>
    