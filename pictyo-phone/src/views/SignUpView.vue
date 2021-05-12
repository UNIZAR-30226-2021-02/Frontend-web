<template>
  <div class="SU-Comp">
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

<style scoped>
  html,body{
    background-color:  grey;
  }

  .SU-Comp{
    margin-top: 50px;
  }

</style>