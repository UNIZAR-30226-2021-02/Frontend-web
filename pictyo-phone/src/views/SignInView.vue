<template>
  <div class="SignInView" style="background-color: grey">
    <img alt="Gartic logo" src="../assets/logo.png">
    <sign-in-component />
  </div>
</template>

<script>
// @ is an alias to /src
import SignInComponent from '@/components/SignInComponent.vue'

export default {
  name: 'SignInView',
  components: {
    SignInComponent
  }
}
</script>

<style>

  .SingInView{
    background-color: grey;
    width: 100%;
    height: 100%;
  }

  html,body{
    background-color:  grey;
  }

  img{
    margin-top: 25px;
    margin-bottom: 40px;
  }

</style>