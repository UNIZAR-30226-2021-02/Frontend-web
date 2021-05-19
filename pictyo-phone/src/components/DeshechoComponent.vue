<template>
    <div class="deshechoComponent">
        <p>{{msg}}</p>
        <!--Comentario-->
    </div>
</template>


<script>
export default {
  name: 'DeshechoComponent',
  props:{
    msg: String
  }
}
</script>