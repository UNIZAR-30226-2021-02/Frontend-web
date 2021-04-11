<template>
    <div class="friendListComponent">
        <p>Lista de amigos:</p>
        <ul>
          <li class="list-group-item" v-for="amigo in amigos"  v-bind:key="amigo">
            <p>{{amigo}}</p>
            <button class="button" v-on:click="eliminar(amigo)">Remove</button>
          </li>
        </ul>
    </div>
</template>


<script> 

import auth from "@/logic/auth";

export default {
  name: 'friendListComponent',
  
    data: () => ({
        loading: true,
        amigos: []
    }),

  methods: {

      eliminar(nombre){
        auth.deleteFriend(nombre).then(() => {
          this.amigos = [];
          this.listFr();
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
              }
              console.log(this.amigos);
              this.loading=false;
          })
          .catch(()=>{});
      }
  },
  beforeMount(){
      this.listFr()
  }
}

</script>

<style scoped>
    .list-group-item {
    display: -webkit-inline-flex
  }
</style>