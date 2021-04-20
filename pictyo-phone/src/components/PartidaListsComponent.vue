<template>
    <div class="PartidaListsComponent" id="contenedor">
        <h4 id="tituloPetis">Lista de Invitaciones:</h4>
        <ol id="listaPetis">
          <li class="list-group-item" v-for="index in IterPeti"  v-bind:key="index">
            <a>Game {{Invitaciones[index]}} from {{InvitacionesHost[index]}}</a>
            <button class="button" v-on:click="aceptarInvitacion(InvitacionesId[index])">Accept</button>
            <button class="button" v-on:click="rechazarInvitacion(InvitacionesId[index])">Deny</button>
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


import util from "@/logic/util";
import auth from "@/logic/auth";

export default {
  name: 'PartidaListsComponent',
  
    data: () => ({
        loading: true,
        Invitaciones: [],
        InvitacionesId: [],
        IterPeti: [],
        InvitacionesHost: [],
        amigos: [],
        IterAmigo: [],
        amigosPts: [],
        amigosFotos: []
    }),

  methods: {
      fotoAmigo(index){
        return this.amigosFotos[index];
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
              //this.Invitaciones = response.data.nombre;
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

      aceptarInvitacion(nombre){
        util.acceptInvitacion(nombre).then(() => {
          console.log("Hoalaaaaa")
          this.Invitaciones = [];
          this.IterPeti = [];
          this.InvitacionesHost = [];
          this.amigos = [];
          this.IterAmigo = [];
          this.amigosFotos = [];
          this.listInvitaciones();
          this.listFr();
          this.$forceUpdate();
        }).catch(()=>{});
      },

      rechazarInvitacion(nombre){
        util.denyInvitacion(nombre).then(() => {
          this.Invitaciones = [];
          this.IterPeti = [];
          this.InvitacionesHost = [];
          this.amigos = [];
          this.IterAmigo = [];
          this.amigosFotos = [];
          this.listInvitaciones();
          this.listFr();
          this.$forceUpdate();
        }).catch(()=>{});
      },

      listInvitaciones(){
        
        var i;
        this.loading=true;
        util.listInvitaciones()
          .then((response)=>{
              console.log("Mis Invitaciones")
              //this.Invitaciones = response.data.nombre;
              for(i=0;i<response.data.length;i++){
                console.log(response.data[i]);
                this.Invitaciones.push(response.data[i].partida.nombre);
                this.InvitacionesId.push(response.data[i].partida.id);
                this.IterPeti.push(i);
                this.InvitacionesHost.push(response.data[i].invitador.nombre);
              }
              console.log(this.Invitaciones);
              this.loading=false;
          })
          .catch(()=>{});
      }
  },
  beforeMount(){
      this.listInvitaciones()
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