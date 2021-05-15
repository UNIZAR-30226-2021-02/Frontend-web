<template>
  <div class="PerfilView">
    <name-changer-component/>
    <navegation-menu-component/>
    <perfil-component />
  </div>
</template>

<script>
import NameChangerComponent from '../components/nameChangerComponent.vue'
import NavegationMenuComponent from '../components/NavegationMenuComponent.vue'
import PerfilComponent from '../components/PerfilComponent.vue'


export default {
  name: 'PerfilView',
  components: {
    PerfilComponent,
    NavegationMenuComponent,
    NameChangerComponent
  }
}
</script>