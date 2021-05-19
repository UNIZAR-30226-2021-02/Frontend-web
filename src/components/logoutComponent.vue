<template>
    <div class="logoutComponent" id="contenedor">
        <button class="button" v-on:click="paint()">Pintar</button>
        <br>
        <button class="button" v-on:click="logOut()">Log Out</button>
        <br>
        <button class="button" v-on:click="mostrarUser()">Prueba</button>
    </div>
</template>

<script>
import auth from "@/logic/auth"
import {setClientToken} from '@/util/APIKIT'
import {setClientMail} from '@/util/APIKIT'

export default {
  name: 'logoutComponent',

    data: () => ({
      mail:"",
      token:""
    }),

  methods: {
      paint(){
        this.$router.push("/Pruebas");
      },

      logOut(){
        setClientToken('');
        setClientMail('');
        auth.deleteUserLogged();
        this.$router.push("/");
      },

      mostrarUser(){
        this.mail=auth.getUserLogged();
        this.token=auth.getToken();
        console.log("Este es el correo: ", this.mail);
        console.log("Este es el token: ", this.token);
      },

    }
}
</script>