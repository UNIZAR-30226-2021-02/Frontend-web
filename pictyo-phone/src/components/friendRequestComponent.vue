<template>
    <div class="friendRequestComponent" id="contenedor">
        <p>Lista de peticiones:</p>
        <li class="list-group-item" v-for="peticion in peticiones"  v-bind:key="peticion">
          <p>{{peticion}}</p>
          <button class="button" v-on:click="aceptar(peticion)">Add</button>
          <button class="button" v-on:click="rechazar(peticion)">Deny</button>
        </li>
    </div>
</template>


<script> 



import auth from "@/logic/auth";

export default {
  name: 'friendRequestComponent',
  
    data: () => ({
        loading: true,
        peticiones: []
    }),

  methods: {
      aceptar(nombre){
        auth.acceptRequest(nombre).then(() => {}).catch(()=>{});
      },

      rechazar(nombre){
        auth.denyRequest(nombre).then(() => {}).catch(()=>{});
      },

      listReq(){
        
        var i;
        this.loading=true;
        auth.listRequest()
          .then((response)=>{
              console.log("Mis peticiones")
              //this.peticiones = response.data.nombre;
              for(i=0;i<response.data.length;i++){
                this.peticiones.push(response.data[i].nombre);
              }
              console.log(this.peticiones);
              this.loading=false;
          })
          .catch(()=>{});
      }
  },
  beforeMount(){
      this.listReq()
  }
}

</script>

<style scoped>
  .list-group-item {
    display: -webkit-inline-flex
  }
</style>