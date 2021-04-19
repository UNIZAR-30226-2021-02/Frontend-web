<template>
    <div class="logoutComponent" id="contenedor">
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
      logOut(){
        setClientToken('');
        setClientName('');
        this.$router.push("/");
      }
    }
}
</script>