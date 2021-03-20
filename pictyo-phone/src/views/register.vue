<template>
  <div class="register">
    <sing-up />
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
