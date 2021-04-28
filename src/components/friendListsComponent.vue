<template>
    <div class="friendListsComponent" id="contenedor">
        <h4 id="tituloPetis">Lista de peticiones:</h4>
        <ol id="listaPetis">
          <li class="list-group-item" v-for="index in IterPeti"  v-bind:key="index">
            <img :src="fotoPeticion(index)">
            <a>{{peticiones[index]}}</a>
            <button class="button" v-on:click="aceptarPeticion(peticiones[index])">Add</button>
            <button class="button" v-on:click="rechazarPeticion(peticiones[index])">Deny</button>
          </li>
        </ol>
        <h4 id="tituloAmigos">Lista de amigos:</h4>
        <ol id=listaAmigos>
          <li class="list-group-item" v-for="index in IterAmigo"  v-bind:key="index">
            <a>{{IterAmigo[index]+1}}. </a>
            <img :src="fotoAmigo(index)">
            <a>{{amigos[index]}} </a>
            <a>{{amigosPts[index]}}pts </a>
            <button class="button" v-on:click="eliminarAmigo(amigos[index])">Remove</button>
          </li>
        </ol>
    </div>
</template>


<script> 



import auth from "@/logic/auth";

export default {
  name: 'friendListsComponent',
  
    data: () => ({
        loading: true,
        peticiones: [],
        IterPeti: [],
        peticionesFotos: [],
        amigos: [],
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

      eliminarAmigo(nombre){
        auth.deleteFriend(nombre).then(() => {
          this.amigos = [];
          this.IterAmigo = [];
          this.amigosFotos = [];
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
                this.IterAmigo.push(i);
                console.log("http://localhost:8080/api/returnImageProfile/" + response.data[i].fotPerf);
                this.amigosFotos.push("http://localhost:8080/api/returnImageProfile/" + response.data[i].fotPerf);
                this.amigosPts.push(response.data[i].estrellas);
              }
              console.log(this.amigos);
              this.loading=false;
          })
          .catch(()=>{});
      },

      aceptarPeticion(nombre){
        auth.acceptRequest(nombre).then(() => {
          this.peticiones = [];
          this.IterPeti = [];
          this.peticionesFotos = [];
          this.amigos = [];
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
          this.peticionesFotos = [];
          this.amigos = [];
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
                this.IterPeti.push(i);
                console.log("http://localhost:8080/api/returnImageProfile/" + response.data[i].fotPerf);
                this.peticionesFotos.push("http://localhost:8080/api/returnImageProfile/" + response.data[i].fotPerf);
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

<style scoped>


  ol { 
    width: 500px;
    }

  ol li a{
    margin: 10 px
  }

  ol li button{
    margin: auto;
  }

  ol li img{
    margin: auto;
    
  }

  ol li {
  background: #F4F4F4;
  border-bottom: 1px solid #7C7C7C;
  border-top: 1px solid #FFF;
  }

  #listaPetis{
    position: absolute;
    top: 350px;
    right: 1080px;
  }

  #tituloPetis{
    position: absolute;
    top: 300px;
    right: 1200px;
  }

  #listaAmigos{
    position: absolute;
    top: 350px;
    right: 300px;
  }

  #tituloAmigos{
    position: absolute;
    top: 300px;
    right: 450px;
  }
</style>