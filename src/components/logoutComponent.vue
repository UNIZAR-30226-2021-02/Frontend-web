<template>
    <div class="logoutComponent" id="contenedor">
        <!--button class="button" v-on:click="paint()">Pintar</button>
        <br-->
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