<template>
  <div class="SI-Comp">
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
  
  .SI-Comp{
    margin-top: 50px;
  }

</style>