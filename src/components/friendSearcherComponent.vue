<template>
    <div class="friendSearcherComponent">
        <form action class="form" @submit.prevent="sendReq">
            <label id="etiqueta" class="form-label" for="#amigo"></label>
            <input v-model="amigo" class="form-input" type="email" id="name" required placeholder="Friend to search">
            <!--p v-if="fallo" class="error">{{msgErr}}</p-->
            <input class="boton" type="submit" value="Add">
        </form>
        
    </div>
</template>


<script> 

import auth from "@/logic/auth"

export default {
  name: 'friendSearcherComponent',
  
  data: () => ({
      amigo: '',
      fallo: false,
      msgErr: ''
  }),

  methods: {
      sendReq(){
          auth.sendRequest(this.amigo)
          .then((data)=>{
              this.amigo = '';
              this.fallo = false;
              console.log(data);
              alert("Solicitud enviada");

          })
          .catch((error)=>{
              this.fallo = true;
              console.log(error);
              switch(error.response.status){
                  case 417:
                      alert("Petición ya enviada");
                      break
                  case 405:
                      alert("Usuario no existente");
              }
          });
      }
  }
}

</script>

<style scoped>
  .boton{
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

  .boton:hover{
    background-color: rgb(15, 1, 80);
    border-color: #00A6D6;

  }

  .boton:active{
    transform: translateY(4px);
  }
</style>