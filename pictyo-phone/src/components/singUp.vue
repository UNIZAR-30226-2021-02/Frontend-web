<template>
    <div id="sing-up">
        <form action class="form" @submit.prevent="prueba">
            <ul>
                <li>
                    <label class="form-label" for="#email">Email: </label>
                    <input v-model="mail"  class="form-input" type="email" id="email" required placeholder="Email">
                </li>
                <li>
                    <label  class="form-label" for="#username">Username: </label>
                    <input v-model="nombre" class="form-input" type="text" id="name" required placeholder="Username">
                </li>
                <li>
                    <label class="form-label" for="#password">Password: </label>
                    <input v-model="password" class="form-input" type="password" id="pass" required placeholder="Password">
                </li>
                <li>
                    <label class="form-label" for="#rpass">Confirm Password: </label>
                    <input v-model="rpass" class="form-input" type="password" id="rpass" required placeholder="Repeat the password"> 
                </li>
                <li>
                    <!--button type="button" id="boton" value="save">Sign in</button-->
                    <input class="form.submit" type="submit" value="Register">
                </li>
            <router-link to="./" tag="button">Back</router-link>
            </ul>
            
        </form>
    </div>
</template>



<script>
/*
import axios from "axios";
    let axiosConfig = {
     headers: { 'Content-Type': 'application/json;charset=UTF-8',
                'crossorigin': 'true',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Origin' : 'http://localhost:8081', }
     };
export default {
    name: 'singUp',
    
  created() {
      let post = {
          nombre: 'User',
          mail: 'User@pablo.es',
          password: '1234'
      };
    axios.post("http://localhost:8080/api/register", post, axiosConfig).then((result) => {
      console.log(result.status);
    })
  }
};*/

import axios from "axios"
//import APIKit, {setClientToken} from "../util/APIKIT";
import auth from "@/logic/auth"

    export default {
        name: 'singUp',
        
        data: () => ({
            nombre: '',
            mail:'',
            password: '',
            rpass: '',
            error: false
        }),

        methods: {
            check() {
                if (this.password===this.rpass) {
                    return true;
                }else{
                    return false;
                }
            },

            register() {
                console.log(this.mail);
                console.log(this.nombre);
                console.log(this.password);
                console.log(this.rpass);
            },

            created() {
                let post = {
                    nombre: this.nombre,
                    mail: this.mail,
                    password: this.password
                };
                axios.post("http://localhost:8080/api/register", post).then((result) => {
                    console.log(result.status);
                })
            },

            registrar() {
                if (this.check()) {
                    this.register();
                } else {
                    alert("Las contraseñas no coinciden");
                }

            },

            prueba() {
                auth.register(this.nombre, this.mail, this.password).then(response =>{
                    console.log(response);
                }).catch(()=>{});
            }

            /*Manera alternativa y asincrona (quitar methods)
                methods: {
                    async register() {
                        const response = await auth.register(this.email, this.password);
                        console.log(response);
                    }
                }
            */ 
        }

    //Decidir que queda mejor, si la alerta o 
    //el mensaje que pone iñigo, aqui de momento se usara la alerta
    };
</script>
