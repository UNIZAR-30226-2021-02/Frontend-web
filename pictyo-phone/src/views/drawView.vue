<template>
  <div class="drawView">
      <draw-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import drawComponent from '../components/drawComponent.vue'

export default {
  name: 'drawView',
  components: {
    drawComponent
  }
}
</script>
    