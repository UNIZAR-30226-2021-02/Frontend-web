<template>
  <div class="register">
    <sign-up-component />
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