<template>
  <div class="login">
    <form action class="formL" @submit.prevent="login">
        <ul>
            <li>
              <img class="logo" src="../assets/logo.png">
            </li>
            <li>
                <input v-model="mail" class="form-input" type="email" required placeholder="Email">
            </li>
            <li>  
                <input v-model="password" class="form-input" type="password" required placeholder="Password">
            </li>
            <li>
                <p v-if="error" class="error"> Usuario o contraseña invalidos</p>
            </li>
            <li>
                <button class="form-submit1" type="submit">LogIn</button>
                <button class="form-submit1" @click="funcion()">Sign Up</button>
            </li>
        </ul>
    </form>
  </div>
</template>

<script>
import auth from "@/logic/auth"
import axios from 'axios';
import {setClientToken} from '@/util/APIKIT'
import {setClientMail} from '@/util/APIKIT'

export default {
  name: 'SignInComponent',

  data: () => ({
    mail: "",
    password: "",
    token: "",
    error: false
  }),

  methods: {
    
    login() {
      auth.login(this.mail, this.password).then(response =>{
        console.log(response);
        setClientToken(response.data.token);
        setClientMail(this.mail);
        this.token=response.data.token;
        console.log(axios.defaults.headers.common);
        auth.SetUserLogged(this.mail, this.token);
        this.$router.push("/Home");
      }).catch(() =>{this.error=true;})
    },

    funcion(){
      this.$router.push("/SignUp");
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../styles/log-system.css";
</style>
