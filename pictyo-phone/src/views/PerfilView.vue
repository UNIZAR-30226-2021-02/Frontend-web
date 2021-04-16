<template>
  <div class="PerfilView">
    <deshecho-component msg="Esto es la página de partidas"/>
    <navegation-menu-component/>
    <perfil-component />
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