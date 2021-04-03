<template>
    <div class="PerfilComponent">
        <b-avatar variant="primary" size="10rem" src="https://cdn.discordapp.com/attachments/693536864480657468/822926290758926376/image.png"></b-avatar>
        <p>{{msg}}<p/>
    </div>
</template>


<script>
export default {
  name: 'PerfilComponent',
  props:{
    msg: String
  }
}
</script>