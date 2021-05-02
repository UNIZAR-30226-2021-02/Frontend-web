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
                    <p v-if="error" class="error"> Usuario o contraseña invalidos</p>
                </li>
                <li>
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
import {setClientMail} from '@/util/APIKIT'

    export default {
        name: 'SignUpComponent',
        
        data: () => ({
            nombre: '',
            mail:'',
            password: '',
            rpass: '',
            token: '',
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
                    console.log(response);
                    this.token=response.data.token;
                    if(response.status===201){
                        this.$router.push("/Home");
                        auth.setUserLogged(this.mail, this.token);
                        console.log(this.mail);
                        console.log(this.token);
                    }else{
                        this.error=true;
                    }
                }).catch(()=>{});
            }
        }
    };
</script>

<style>
    p{
        color: red;
        font-weight: bolder;
    }
</style>
