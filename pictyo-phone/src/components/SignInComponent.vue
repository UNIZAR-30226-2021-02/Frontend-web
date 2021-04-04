<template>
  <div class="login">
    <form action class="form" @submit.prevent="login">
        <ul>
            <li>
                <label class="form-label" for="#username">Username:  </label>
                <input v-model="user" class="form-input" type="text" id="user" required placeholder="User">
            </li>
            <li>
                <label class="form-label" for="#pass">Password:  </label>
                <input v-model="pass" class="form-input" type="password" id="pass" required placeholder="Password">
                <p v-if="error" class="error"> Usuario o contraseña invalidos</p>
            </li>
            <li>
                <button class="form-submit" type="submit">LogIn</button>
                <!--router-link to="/MiPerfil" tag="button">Sign in</router-link-->
            </li>
            <li>
                <router-link to="/SignUp" tag="button">Sign Up</router-link>
            </li>
        </ul>
        <router-link to="/Home" tag="button">BotonRandomxd</router-link>
    </form>
  </div>
</template>

<script>
import auth from "@/logic/auth"
import axios from 'axios';
import {setClientToken} from '@/util/APIKIT'

export default {
  name: 'SignInComponent',

  data: () => ({
    user: "",
    pass: "",
    error: false
  }),

  methods: {
    /*login(){
      //apikit.
      console.log(this.user),
      console.log(this.pass),
      this.error= true
    }*/

    /*async login() {
      try {
        await auth.login(this.user,this.pass);
      } catch (error){
        this.error
      }
    }*/

    login() {
      auth.login(this.user, this.password).then(response =>{
        console.log(response);
        setClientToken(response.data.token);
        //axios.defaults.headers.common["Authorization"] = `${response.data.token}`;
        console.log(axios.defaults.headers.common);
        this.$router.push("/Home");
      }).catch(() =>{this.error=true;})
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 form {
    margin: 0 auto;
    width: 400px;
    padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  form li + li {
    margin-top: 1em;
 }

  label {
    display: inline-block;
    width: 90px;
    text-align: right;
  }

  input{
    font: 1em arial;
    /*width: 300px;  Decidir que diseño queda mejor*/ 
    box-sizing: border-box;
    border: 1px solid black;
    margin-left: 5px;
  }

  input:focus{
    border-color: #999;
  }

  .button {
    padding-left: 90px;
  }

  button{
    margin-left: .5em;
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
a {
  color: #42b983;
}

p{
  color: red;
  font-weight: bolder;
}

</style>
