<template>
  <div class="PartidaListsComponent" id="contenedor">

    <div class="partidas">
      <h4 class="titulopartidas" style="color:white">Lista de partidas:</h4>
      <ol class=listapartidas>
        <li class="list-group-item" style="" v-for="index in IterPartida"  v-bind:key="index">
          <a>Partida {{partidas[index]}} {{partidasEstado[index]}} </a>
          <button class="button" v-on:click="jugarPartida(index)">Play</button>
        </li>
      </ol>
    </div>

    <div class="invitaciones">
      <h4 class="tituloInvitaciones" style="color:white">Lista de Invitaciones:</h4>
      <ol class="listaInvitaciones">
        <li class="list-group-item" v-for="index in IterPeti"  v-bind:key="index">
          <a>Game {{Invitaciones[index]}} from {{InvitacionesHost[index]}}</a>
          <button class="button" v-on:click="aceptarInvitacion(InvitacionesId[index])">Accept</button>
          <button class="button" v-on:click="rechazarInvitacion(InvitacionesId[index])">Deny</button>
        </li>
      </ol>
    </div>

  </div>
</template>

<style scoped>
  .invitaciones{
    position: fixed;
    left: 22%;
    margin:20px;
    display: inline-block;
    height: 400px;
  }

  .partidas{
    position: fixed;
    right: 15%;
    margin:20px;
    display: inline-block;
    height: 400px;
  }

  .list-group-item{
    background-color: white;
  }

  .listaInvitaciones{
    height: 350px;
    overflow:hidden; 
    overflow-y:scroll;
  }

  .listapartidas{
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
 
</style>

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
        console.log(this.partidasId[index]);
        if(getClientMail() == this.partidasHost[index] && this.partidasEstado[index] == "esperando"){
          setGameId(this.partidasId[index]);
          this.$router.push("/Lobby");
        }
        else if(this.partidasEstado[index] != "esperando"){
          setGameId(this.partidasId[index]);
          this.$router.push("/Draw");
          /*util.returnResponse(this.partidasId[index])
          .then((response)=>{
              switch(response.data.id_)
          })*/
        }

      },

      listGames(){
        
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
          this.InvitacionesId = [];
          this.partidas = [];
          this.IterPartida = [];
          this.partidasEstado = [];
          this.partidasId = [];
          this.partidasHost = [];
          this.listInvitaciones();
          this.listGames();
          this.$forceUpdate();
        }).catch(()=>{});
      },

      rechazarInvitacion(nombre){
        util.denyInvitacion(nombre).then(() => {
          this.Invitaciones = [];
          this.IterPeti = [];
          this.InvitacionesHost = [];
          this.InvitacionesId = [];
          this.partidas = [];
          this.IterPartida = [];
          this.partidasEstado = [];
          this.partidasId = [];
          this.partidasHost = [];
          this.listInvitaciones();
          this.listGames();
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
      this.listGames()
  }
}

</script>
