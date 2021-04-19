<template>
    <div class="partidasCreatorComponent">
        <form action class="form" @submit.prevent="createGame">
            <label id="etiqueta" class="form-label" for="#game"></label>
            <input v-model="game" class="form-input" type="text" id="name" required placeholder="Game to create">
            <input class="form.submit" type="submit" value="Create">
        </form>
    </div>
</template>


<script> 

import util from "@/logic/util"
import {setGameId} from '@/util/APIKIT'

export default {
  name: 'partidasCreatorComponent',
  
  data: () => ({
      game: ''
  }),

  methods: {
      createGame(){
          util.createGame(this.game)
          .then((response)=>{
              console.log(response.data);
              setGameId(response.data.id);
              this.$router.push("/Lobby");
          })
          .catch(()=>{});
      }
  }
}

</script>

<style scoped>

</style>