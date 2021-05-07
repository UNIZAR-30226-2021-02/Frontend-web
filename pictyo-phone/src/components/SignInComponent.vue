<template>
  <div class="login">
    <form action class="form" @submit.prevent="login">
        <ul>
            <li>
                <input v-model="mail" class="form-input" type="email" required placeholder="Email">
            </li>
            <li>
                
                <input v-model="password" class="form-input" type="password" required placeholder="Password">
                <p v-if="error" class="error"> Usuario o contraseña invalidos</p>
            </li>
            <li>
                <button class="form-submit" type="submit">LogIn</button>
            </li>
            <li>
                <router-link to="/SignUp" tag="button">Sign Up</router-link>
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
        this.$router.push("/Home");
        auth.setUserLogged(this.mail, this.token);
        console.log(this.mail, this.token);
      }).catch(() =>{this.error=true;})
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .login{
    background-color: grey;
  }

 form {
    margin: auto;
    width: 400px;
    border-radius: 10px;
    border: 4px solid black;
    background-color:#17151C;
  }

  ul{
    margin: 25px;
  }

  form li + li {
    margin-top: 2em;
  }

  input{
    font: 1em arial;
    width: 300px; 
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 7px;
  }

  button{
    background-color:#00A6D6;
    border-color: rgb(15, 1, 80);
    color:white;
    border-width: 3px;
    border-radius: 15px;
    padding: 10px 15px;
    box-shadow: 10px;
    font-family: arial;
  }

  button:hover{
    background-color: rgb(15, 1, 80);
    border-color: #00A6D6;

  }

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

p{
  margin-top: 5px;
  color: red;
  font-weight: bolder;
  font-family: Arial;
}

</style>
