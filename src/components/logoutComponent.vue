<template>
    <div class="logoutComponent">
        <button class="puerta" v-on:click="logOut()"><img src="@/assets/logOutIcon.png" style="heigth: 50px; width:50px;"></button>
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
  .puerta{
    background-color: white;
    border-radius: 15px;
  }
</style>