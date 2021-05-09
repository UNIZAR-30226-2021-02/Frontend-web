<template>
  <div>
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
  html,body{
    background-color:  grey;
  }
  
  div{
    margin-top: 100px;
  }

</style>