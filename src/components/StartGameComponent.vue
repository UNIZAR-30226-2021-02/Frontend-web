<template>
    <div class="StartGameComponent" id="contenedor">
          <button class="button" v-on:click="startGame()">Start</button>
    </div>
</template>

<script> 
import util from "@/logic/util";
import {setGameId} from '@/util/APIKIT'
import {setInvitedName} from '@/util/APIKIT'

export default {
  name: 'StartGameComponent',
  
  
    data: () => ({
    }),

  methods: {
      startGame(){
        
        util.startGame().then(() => {
            setGameId('');
            setInvitedName('');
            this.$router.push("/Partidas");
        }).catch(()=>{});

      }
    }
}
</script>
