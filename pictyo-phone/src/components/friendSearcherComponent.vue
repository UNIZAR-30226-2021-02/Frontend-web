<template>
    <div class="friendSearcherComponent">
        <form action class="form" @submit.prevent="sendReq">
            <ul>
                <li>
                    <label id="etiqueta" class="form-label" for="#amigo"></label>
                    <input v-model="amigo" class="form-input" type="text" id="name" required placeholder="Friend to search">
                    <p v-if="fallo" class="error">{{msgErr}}</p>
                    <input class="form.submit" type="submit" value="Add">
                </li>
            </ul>
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
          .then(()=>{
              this.amigo = '';
              this.fallo = false;
          })
          .catch((error)=>{
              this.fallo = true;
              switch(error.response.status){
                  case 417:
                      this.msgErr ="Petición ya enviada";
                      break
                  case 500:
                      this.msgErr="Usuario no existente";
              }
          });
      }
  }
}

</script>

<style scoped>

</style>