<template>
  <div class="friendListsComponent" id="contenedor">

    <div class="amigos">
      <h4 class="tituloAmigos">Lista de amigos:</h4>
      <ol class=listaAmigos>
        <li class="list-group-item" style="border-radius: 25px;" v-for="index in IterAmigo"  v-bind:key="index">
          <a>{{IterAmigo[index]+1}}. </a>
          <img :src="fotoAmigo(index)">
          <a>{{amigos[index]}} </a>
          <a>{{amigosPts[index]}}pts </a>
          <button class="boton" v-on:click="eliminarAmigo(amigosMail[index])">Remove</button>
        </li>
      </ol>
    </div>

    <div class="petis">
      <h4 class="tituloPetis" style="color:white;">Lista de peticiones:</h4>
      <ol class="listaPetis">
        <li class="list-group-item" style="border-radius: 25px;" v-for="index in IterPeti"  v-bind:key="index">
          <img :src="fotoPeticion(index)">
          <a>{{peticiones[index]}}</a>
          <button class="boton" v-on:click="aceptarPeticion(petisMail[index])">Add</button>
          <button class="boton" v-on:click="rechazarPeticion(petisMail[index])">Deny</button>
        </li>
      </ol>
    </div>

  </div>
</template>

<style scoped>
  .petis{
    position: fixed;
    left: 22%;
    margin:20px;
    display: inline-block;
    height: 400px;
  }

  .amigos{
    position: fixed;
    right: 15%;
    margin:20px;
    display: inline-block;
    height: 400px;
  }

  .list-group-item{
    
    background-color: white;
  }

  .tituloAmigos{
    color:white;
    right: 25%;
  }

  .listaPetis{
    height: 350px;
    overflow:hidden; 
    overflow-y:scroll;
  }

  .listaAmigos{
    height: 350px;
    overflow:hidden; 
    overflow-y:scroll;
  }

  .boton{
      background-color:#00A6D6;
      border-color: rgb(15, 1, 80);
      color:white;
      border-width: 3px;
      border-radius: 15px;
      padding: 10px 15px;
      box-shadow: 10px;
      font-family: arial;
      margin: 1em;
    }

    .boton:hover{
      background-color: rgb(15, 1, 80);
      border-color: #00A6D6;

    }

    .boton:active{
      transform: translateY(4px);
    }
/*--------------------*/ 

</style>

<script> 

import auth from "@/logic/auth";

export default {
  name: 'friendListsComponent',
  
    data: () => ({
        loading: true,
        peticiones: [],
        petisMail: [],
        IterPeti: [],
        peticionesFotos: [],
        amigos: [],
        amigosMail: [],
        IterAmigo: [],
        amigosPts: [],
        amigosFotos: []
    }),

  methods: {
      fotoAmigo(index){
        return this.amigosFotos[index];
      },

      fotoPeticion(index){
        return this.peticionesFotos[index];
      },

      eliminarAmigo(mail){
        auth.deleteFriend(mail).then(() => {
          this.amigos = [];
          this.IterAmigo = [];
          this.amigosFotos = [];
          this.amigosMail = [];
          this.listFr();
          this.$forceUpdate();
        }).catch(()=>{});
        
      },

      listFr(){
        
        var i;
        this.loading=true;
        auth.listFriends()
          .then((response)=>{
              console.log("Mis amigos")
              //this.peticiones = response.data.nombre;
              for(i=0;i<response.data.length;i++){
                this.amigos.push(response.data[i].nombre);
                this.amigosMail.push(response.data[i].mail);
                this.IterAmigo.push(i);
                console.log("http://35.246.75.160:443/api/returnImageProfile/" + response.data[i].fotPerf);
                this.amigosFotos.push("http://35.246.75.160:443/api/returnImageProfile/" + response.data[i].fotPerf);
                this.amigosPts.push(response.data[i].estrellas);
              }
              console.log(this.amigos);
              this.loading=false;
          })
          .catch(()=>{});
      },

      aceptarPeticion(nombre){
        console.log(nombre);
        auth.acceptRequest(nombre).then(() => {
          this.peticiones = [];
          this.IterPeti = [];
          this.peticionesFotos = [];
          this.petisMail = [];
          this.amigos = [];
          this.amigosMail = [];
          this.IterAmigo = [];
          this.amigosFotos = [];
          this.listReq();
          this.listFr();
          this.$forceUpdate();
        }).catch(()=>{});
      },

      rechazarPeticion(nombre){
        
        auth.denyRequest(nombre).then(() => {
          this.peticiones = [];
          this.IterPeti = [];
          this.petisMail = [];
          this.peticionesFotos = [];
          this.amigos = [];
          this.amigosMail = [];
          this.IterAmigo = [];
          this.amigosFotos = [];
          this.listReq();
          this.listFr();
          this.$forceUpdate();
        }).catch(()=>{});
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
                this.petisMail.push(response.data[i].mail);
                this.IterPeti.push(i);
                console.log("http://35.246.75.160:443/api/returnImageProfile/" + response.data[i].fotPerf);
                this.peticionesFotos.push("http://35.246.75.160:443/api/returnImageProfile/" + response.data[i].fotPerf);
              }
              console.log(this.peticiones);
              this.loading=false;
          })
          .catch(()=>{});
      }
  },
  beforeMount(){
      this.listReq()
      this.listFr()
  }
}

</script>

