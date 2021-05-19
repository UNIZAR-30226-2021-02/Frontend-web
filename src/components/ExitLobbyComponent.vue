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

<style scoped>
  .button{
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

  .button:hover{
    background-color: rgb(15, 1, 80);
    border-color: #00A6D6;

  }

  .button:active{
    transform: translateY(4px);
  }
</style>