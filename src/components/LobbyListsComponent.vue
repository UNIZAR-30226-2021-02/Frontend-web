<template>
    <div class="friendListsComponent" id="contenedor">
        <h4 id="tituloPetis">Lista de jugadores:</h4>
        <ol id="listaPetis">
          <li class="list-group-item" v-for="index in IterJugador"  v-bind:key="index">
            <img :src="fotoPeticion(index)">
            <a>{{jugadores[index]}}</a>
          </li>
        </ol>
        <h4 id="tituloAmigos">Lista de amigos:</h4>
        <ol id=listaAmigos>
          <li class="list-group-item" v-for="index in IterAmigo"  v-bind:key="index">
            <img :src="fotoAmigo(index)">
            <a>{{amigos[index]}} </a>
            <button class="button" v-on:click="invitarAmigo(amigosMail[index])">Invite</button>
          </li>
        </ol>
    </div>
</template>


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
                console.log("http://localhost:8080/api/returnImageProfile/" + response.data[i].fotPerf);
                this.amigosFotos.push("http://localhost:8080/api/returnImageProfile/" + response.data[i].fotPerf);
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
                console.log("http://localhost:8080/api/returnImageProfile/" + response.data[i].fotPerf);
                this.jugadoresFotos.push("http://localhost:8080/api/returnImageProfile/" + response.data[i].fotPerf);
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