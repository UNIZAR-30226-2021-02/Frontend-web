<template>
  <div class="SignInView">
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
