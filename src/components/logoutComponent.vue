<template>
    <div class="logoutComponent" id="contenedor">
        <button class="button" v-on:click="paint()">Pintar</button>
        <br>
        <button class="button" v-on:click="logOut()">Log Out</button>  
    </div>
</template>

<script> 
import {setClientToken} from '@/util/APIKIT'
import {setClientName} from '@/util/APIKIT'

export default {
  name: 'logoutComponent',
  
  
    data: () => ({
    }),

  methods: {
      paint(){
        this.$router.push("/Draw");
      },

      logOut(){
        setClientToken('');
        setClientName('');
        this.$router.push("/");
      }
    }
}
</script>