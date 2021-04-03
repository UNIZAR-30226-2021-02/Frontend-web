<template>
  <div class="PartidasView">
      <deshecho-component msg="Esto es la página de partidas"/>
      <navegation-menu-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavegationMenuComponent from '@/components/NavegationMenuComponent.vue'
import DeshechoComponent from '../components/DeshechoComponent.vue'

export default {
  name: 'PartidasView',
  components: {
    NavegationMenuComponent,
    DeshechoComponent
  }
}
</script>