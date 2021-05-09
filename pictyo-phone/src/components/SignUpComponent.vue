<template>
    <div id="sign-up-component">
        <form action class="formM" @submit.prevent="registrar">
            <ul>
                <li>
                    <img alt="Gartic logo" src="../assets/logo.png">
                </li>
                <li>
                    <input v-model="mail"  class="form-input" type="email" id="email" required placeholder="Email" style="margin-top:10px">
                </li>
                <li>
                    <input v-model="nombre" class="form-input" type="text" id="name" required placeholder="Username">
                </li>
                <li>
                    <input v-model="password" class="form-input" type="password" id="pass" required placeholder="Password">
                </li>
                <li>
                    <input v-model="rpass" class="form-input" type="password" id="rpass" required placeholder="Repeat the password"> 
                </li>
                <li>
                    <p v-if="error" class="error"> Usuario o contraseña invalidos</p>
                </li>
                <li>
                    <button class="form-submit" type="submit">Register</button>
                </li>
                <li>
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
                console.log(this.estado);
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
                    if(response.status===201){
                        this.$router.push("/Home");
                        auth.setUserLogged(this.mail, this.token);
                        console.log(this.mail);
                        console.log(this.token);
                    }
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
