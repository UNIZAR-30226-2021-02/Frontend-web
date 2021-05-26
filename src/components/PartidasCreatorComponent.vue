<template>
    <div class="partidasCreatorComponent">
        <form action class="form" @submit.prevent="createGame">
            <label id="etiqueta" class="form-label" for="#game"></label>
            <input v-model="game" class="form-input" type="text" id="name" required placeholder="Game to create">
            <input class="boton" type="submit" value="Create">
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
              util.setGameIdCookies(response.data.id);
              this.$router.push("/Lobby");
          })
          .catch(()=>{});
      }
  }
}

</script>

<style scoped>

    .boton{
        background-color:#00A6D6;
        border-color: rgb(15, 1, 80);
        color:white;
        border-width: 3px;
        border-radius: 15px;
        padding: 10px 15px;
        box-shadow: 10px;
        font-family: arial;
        width: 100px;
        margin: 1em;
    }

    .boton:hover{
        background-color: rgb(15, 1, 80);
        border-color: #00A6D6;

    }

    .boton:active{
        transform: translateY(4px);
    }

</style>