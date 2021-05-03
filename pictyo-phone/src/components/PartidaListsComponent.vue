<template>
    <div class="PartidaListsComponent" id="contenedor">
        <h4 id="titulopartidas">Lista de partidas:</h4>
        <ol id=listapartidas>
          <li class="list-group-item" v-for="index in IterPartida"  v-bind:key="index">
            <a>Partida {{partidas[index]}} {{partidasEstado[index]}} </a>
            <button class="button" v-on:click="jugarPartida(index)">Play</button>
          </li>
        </ol>
        <h4 id="tituloInvitaciones">Lista de Invitaciones:</h4>
        <ol id="listaInvitaciones">
          <li class="list-group-item" v-for="index in IterPeti"  v-bind:key="index">
            <a>Game {{Invitaciones[index]}} from {{InvitacionesHost[index]}}</a>
            <button class="button" v-on:click="aceptarInvitacion(InvitacionesId[index])">Accept</button>
            <button class="button" v-on:click="rechazarInvitacion(InvitacionesId[index])">Deny</button>
          </li>
        </ol>
    </div>
</template>


<script> 


import util from "@/logic/util";
import {setGameId} from '@/util/APIKIT'
import {getClientMail} from '@/util/APIKIT'

export default {
  name: 'PartidaListsComponent',
  
    data: () => ({
        loading: true,
        loadingG: true,
        Invitaciones: [],
        InvitacionesId: [],
        IterPeti: [],
        InvitacionesHost: [],
        partidas: [],
        IterPartida: [],
        partidasId: [],
        partidasHost: [],
        partidasEstado: []
    }),

  methods: {
      fotoAmigo(index){
        return this.partidasEstado[index];
      },

      jugarPartida(index){
        console.log(index)
        console.log(this.partidasHost[index]);
        if(getClientMail() == this.partidasHost[index] && this.partidasEstado[index] == "esperando"){
          setGameId(this.partidasId[index]);
          this.$router.push("/Lobby");
        }
        else{
          setGameId(this.partidasId[index]);
          this.$router.push("/Draw");
          /*util.returnResponse(this.partidasId[index])
          .then((response)=>{
              switch(response.data.id_)
          })*/
        }

      },

      listFr(){
        
        var i;
        this.loading=true;
        util.listGames()
          .then((response)=>{
              console.log("Mis Partidas")
              //this.Invitaciones = response.data.nombre;
              console.log(response.data)
              for(i=0;i<response.data.length;i++){
                this.partidas.push(response.data[i].nombre);
                this.IterPartida.push(i);
                this.partidasEstado.push(response.data[i].estado_);
                this.partidasHost.push(response.data[i].host_.mail);
                this.partidasId.push(response.data[i].id);
              }
              
              this.loadingG=false;
          })
          .catch(()=>{
            console.log("adsadasdasda")
          });
      },

      aceptarInvitacion(nombre){
        util.acceptInvitacion(nombre).then(() => {
          console.log("Hoalaaaaa")
          this.Invitaciones = [];
          this.IterPeti = [];
          this.InvitacionesHost = [];
          this.partidas = [];
          this.IterPartida = [];
          this.partidasEstado = [];
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
          this.partidas = [];
          this.IterPartida = [];
          this.partidasEstado = [];
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

  #listapartidas{
    position: absolute;
    top: 350px;
    right: 1080px;
  }

  #titulopartidas{
    position: absolute;
    top: 300px;
    right: 1200px;
  }

  #listaInvitaciones{
    position: absolute;
    top: 350px;
    right: 300px;
  }

  #tituloInvitaciones{
    position: absolute;
    top: 300px;
    right: 450px;
  }
</style>