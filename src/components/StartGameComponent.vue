<template>
    <div class="StartGameComponent">
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

<style scoped>

  .StartGameComponent{
    margin:5px
  }

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