<template>
  <div class="ShopView">
      <deshecho-component msg="Esto es la página de la tienda"/>
      <navegation-menu-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavegationMenuComponent from '@/components/NavegationMenuComponent.vue'
import DeshechoComponent from '../components/DeshechoComponent.vue'

export default {
  name: 'ShopView',
  components: {
    NavegationMenuComponent,
    DeshechoComponent
  }
}
</script>