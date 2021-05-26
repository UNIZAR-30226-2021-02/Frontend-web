<template>
  <div class="friendListsComponent">
    <div class="petis">
      <h4 class="tituloPetis" style="color:white;">Lista de jugadores:</h4>
      <ol class="listaPetis">
        <li class="list-group-item" style="border-radius: 25px; width: 300px;" v-for="index in IterJugador"  v-bind:key="index">
          <img :src="fotoPeticion(index)">
          <a>{{jugadores[index]}}</a>
        </li>
      </ol>
    </div>

    <div class="vacio" v-if="IterAmigo.length==0">
        <h4 class="tituloPetis" style="color:white; position: fixed; top: 18%; right:24%">Lista de amigos:</h4>
    </div>
    <div class="noVacio" v-if="IterAmigo.length!=0">
      <div class="amigos">
        <h4 class="tituloAmigos" style="color:white">Lista de amigos:</h4>
        <ol class="listaAmigos">
          <li class="list-group-item" style="border-radius: 25px;" v-for="index in IterAmigo"  v-bind:key="index">
            <img :src="fotoAmigo(index)">
            <a>{{amigos[index]}} </a>
            <button class="boton" v-on:click="invitarAmigo(amigosMail[index])">Invite</button>
          </li>
        </ol>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .petis{
    position: fixed;
    left: 22%;
    margin:20px;
    display: inline-block;
    height: 500px;
  }

  .amigos{
    position: fixed;
    right: 15%;
    margin:20px;
    display: inline-block;
    height: 500px;
  }

  .list-group-item{
    background-color: white;
  }

  .listaAmigos{
    height: 450px;
    overflow:hidden; 
    overflow-y:scroll;
  }

  .listaPetis{
    height: 450px;
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

export default {
  name: 'friendListsComponent',
  
    data: () => ({
        loading: true,
        jugadores: [],
        IterJugador: [],
        jugadoresFotos: [],
        amigos: [],
        amigosMail: [],
        IterAmigo: [],
        amigosFotos: []
    }),

  methods: {
      fotoAmigo(index){
        return this.amigosFotos[index];
      },

      fotoPeticion(index){
        return this.jugadoresFotos[index];
      },

      invitarAmigo(mail){
        util.inviteFriend(mail).then(() => {
          alert("La invitación fué enviada correctamente");
          
          /*this.amigos = [];
          this.IterAmigo = [];
          this.amigosFotos = [];                Esto para cuando tengamos la función de listar amigos que no están invitados.
          this.listFr();
          this.$forceUpdate();*/

        })
        .catch(()=>{
             alert("Invitación ya enviada");
          });
        
      },

      listFr(){
        
        var i;
        this.loading=true;
        util.listFriendsNotInGame()
          .then((response)=>{
              console.log("Mis amigos")
              //this.jugadores = response.data.nombre;
              for(i=0;i<response.data.length;i++){
                this.amigos.push(response.data[i].nombre);
                this.amigosMail.push(response.data[i].mail);
                this.IterAmigo.push(i);
                console.log("http://35.246.75.160:443/api/returnImageProfile/" + response.data[i].fotPerf);
                this.amigosFotos.push("http://35.246.75.160:443/api/returnImageProfile/" + response.data[i].fotPerf);
              }
              console.log(this.amigos);
              this.loading=false;
          })
          .catch(()=>{});
      },

      listJugadores(){
        
        var i;
        this.loading=true;
        util.listPlayers()
          .then((response)=>{
              console.log("Mis jugadores")
              //this.jugadores = response.data.nombre;
              for(i=0;i<response.data.length;i++){
                this.jugadores.push(response.data[i].nombre);
                this.IterJugador.push(i);
                console.log("http://35.246.75.160:443/api/returnImageProfile/" + response.data[i].fotPerf);
                this.jugadoresFotos.push("http://35.246.75.160:443/api/returnImageProfile/" + response.data[i].fotPerf);
              }
              console.log(this.jugadores);
              this.loading=false;
          })
          .catch(()=>{console.log("S:")});
      }
  },
  beforeMount(){
      this.listJugadores()
      this.listFr()
  }
}

</script>