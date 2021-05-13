<template>
  <!--div class="pantalla">
    <div class="nav-col">
      <navegation-menu-component/>
    </div>
    <div class="content-col">
      <div class="HomeView">
          <deshecho-component msg="Esto es la página de home"/>
          <logout-component/>
      </div>
    </div>
  </div>
</template-->

  <div class="HomeView">
    <div class="nav-col">
      <navegation-menu-component/>
    </div>
    <div class="content-col">
        <deshecho-component msg="Esto es la página de home"/>
        <logout-component/>
    </div>
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

<style scoped>

  .pantalla{
    background-color: grey;
    position:fixed;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
  }

  .HomeView{
    border: 5px solid rgb(49, 49, 49);
    position: absolute;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 50px;
    background-color: red /*#17151c*/;
    border-radius: 25px;
  }

  html, body{
    background-color: grey;
  }

  .nav-col{
    float:left;
    width: 90px;
    padding: 15px;
    background-color: white;
    border-radius: 20px;
  }

  .content-col {
    height: inherit;
    display: inline-block;
    padding: 15px;
  }

</style>
    