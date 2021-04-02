<template>
  <div class="PerfilView">
    <perfil-component msg="El_Rial_Oreo"/>
    <deshecho-component msg="Esto es la página de partidas"/>
    <navegation-menu-component/>
  </div>
</template>

<script>
import DeshechoComponent from '../components/DeshechoComponent.vue'
import NavegationMenuComponent from '../components/NavegationMenuComponent.vue'
import PerfilComponent from '../components/PerfilComponent.vue'


export default {
  name: 'PerfilView',
  components: {
    PerfilComponent,
    NavegationMenuComponent,
    DeshechoComponent
  }
}
</script>