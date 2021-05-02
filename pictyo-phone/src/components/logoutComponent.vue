<template>
    <div class="logoutComponent" id="contenedor">
        <button class="button" v-on:click="paint()">Pintar</button>
        <br>
        <button class="button" v-on:click="logOut()">Log Out</button>  
    </div>
</template>

<script>
import auth from "@/logic/auth"
import {setClientToken} from '@/util/APIKIT'
import {setClientMail} from '@/util/APIKIT'

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
        setClientMail('');
        auth.deleteUserLogged();
        this.$router.push("/");
      }
    }
}
</script>