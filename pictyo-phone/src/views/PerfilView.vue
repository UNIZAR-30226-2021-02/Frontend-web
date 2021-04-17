<template>
  <div class="PerfilView">
    <navegation-menu-component/>
    <perfil-component />
  </div>
</template>

<script>
import NavegationMenuComponent from '../components/NavegationMenuComponent.vue'
import PerfilComponent from '../components/PerfilComponent.vue'


export default {
  name: 'PerfilView',
  components: {
    PerfilComponent,
    NavegationMenuComponent
  }
}
</script>