<template>
    <div id="sign-up-component">
        <form action class="form" @submit.prevent="registrar">
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
import auth from "@/logic/auth"
import {setClientToken} from '@/util/APIKIT'
import {setClientName} from '@/util/APIKIT'

    export default {
        name: 'SignUpComponent',
        
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

            registrar() {
                if (this.check()) {
                    this.postReg();
                    this.$router.push("/Home");
                } else {
                    alert("Las contraseñas no coinciden");
                }

            },

            postReg() {
                auth.register(this.nombre, this.mail, this.password).then(response =>{
                    setClientToken(response.data.token);
                    setClientName(this.nombre);
                    console.log(response.status);
                }).catch(()=>{});
            }
        }

    //Decidir que queda mejor, si la alerta o 
    //el mensaje que pone iñigo, aqui de momento se usara la alerta
    };
</script>
