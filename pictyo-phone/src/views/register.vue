<template>
  <div class="register">
    <sing-up msg="Welcome to Your Vue.js App"/>
  </div>
</template>


<script>
// @ is an alias to /src
import singUp from '@/components/singUp.vue'

export default {
  name: 'register',
  components: {
    singUp
  }
}
</script>
