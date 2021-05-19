<template>
    <div class="exitLobbyComponent" id="contenedor">
          <button class="button" v-on:click="exit()">Back</button>
    </div>
</template>

<script> 
import {setGameId} from '@/util/APIKIT'
import {setInvitedName} from '@/util/APIKIT'

export default {
  name: 'exitLobbyComponent',
  
  
    data: () => ({
    }),

  methods: {
      exit(){
        setGameId('');
        setInvitedName('');
        this.$router.push("/Partidas");
      }
    }
}
</script>
