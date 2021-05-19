<template>
    <div id="sign-up-component" class="register">
        <form action class="formM" @submit.prevent="registrar">
            <ul>
                <li class="SU-li">
                    <img class="logo" alt="Gartic logo" src="../assets/logo.png">
                </li>
                <li class="SU-li">
                    <input v-model="mail"  class="form-input" type="email" id="email" required placeholder="Email" style="margin-top:10px">
                </li>
                <li class="SU-li">
                    <input v-model="nombre" class="form-input" type="text" id="name" required placeholder="Username">
                </li>
                <li class="SU-li">
                    <input v-model="password" class="form-input" type="password" id="pass" required placeholder="Password">
                </li>
                <li class="SU-li">
                    <input v-model="rpass" class="form-input" type="password" id="rpass" required placeholder="Repeat the password"> 
                </li>
                <li class="SU-li">
                    <p v-if="error" class="error"> Usuario o contraseña invalidos</p>
                </li>
                <li class="SU-li">
                    <button class="form-submit" type="submit">Register</button>
                </li>
                <li class="SU-li">
                    <router-link to="./" class="a">Go to login</router-link>
                </li>
            </ul>
            
        </form>
    </div>
</template>

<script>
import auth from "@/logic/auth"
import {setClientToken} from '@/util/APIKIT'
import {setClientMail} from '@/util/APIKIT'

    export default {
        name: 'SignUpComponent',
        
        data: () => ({
            nombre: '',
            mail:'',
            password: '',
            rpass: '',
            token: '',
            status: '',
            error: false,
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
                this.error=false;
                this.response="";
                if (this.check()) {
                    this.postReg();
                } else {
                    alert("Las contraseñas no coinciden");
                }

            },

            postReg() {
                auth.register(this.nombre, this.mail, this.password).then(response =>{
                    setClientToken(response.data.token);
                    setClientMail(this.mail);                     
                    this.token=response.data.token;
                    auth.SetUserLogged(this.mail, this.token);
                    this.$router.push("/Home");

                }).catch((error)=>{
 
                    switch(error.response.status){
                        case 417:
                            console.log('Usuario o mail existente');
                            this.error=true;
                    }
                })
            }
        }
    };
</script>

<style scoped>
    @import '../styles/probe.css';
</style>
