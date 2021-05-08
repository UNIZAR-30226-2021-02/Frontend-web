<template>
  <div class="register">
    <img alt="Gartic logo" src="../assets/logo.png">
    <sign-up-component/>
  </div>
</template>


<script>
// @ is an alias to /src
import SignUpComponent from '@/components/SignUpComponent.vue'

export default {
  name: 'SignUpView',
  components: {
    SignUpComponent
  }
}
</script>

<style>
  .register{
    background-color: grey;
    width: 100%;
    height: 100%;
  }

  img{
    height: 200px;
  }

</style>