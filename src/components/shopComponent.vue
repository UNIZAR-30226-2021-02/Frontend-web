<template>
  <div >

      <h4 id="tituloAdquiridos">Imágenes adquiridas:</h4>
        <ol  v-if="!this.loadingI" id="listaComprables">
          <li style="display:inline-block;" class="list-group-item" v-for="index in fotosInventario.length"  v-bind:key="index">
            <img @click="setProfPic(fotosInventario[index-1].idFoto)" style="width:80px; height:80px;" id="imgBuy" :src="imgTienda(fotosInventario[index-1].idFoto)">
            <p/>
            <a v-if="selected[index-1]" >Seleccionada</a>
            <a v-if="!selected[index-1]" >Seleccionar</a>
          </li>
        </ol>

      <!--toca ver los puntos -->
      <h4 id="tituloTienda">Tienda:</h4>
        <ol  v-if="!this.loadingS" id="listaComprables">
          <li style="display:inline-block;" class="list-group-item" v-for="index in fotosTienda.length"  v-bind:key="index">
            <img @click="buyPhoto(fotosTienda[index-1].idFoto)" style="width:80px; height:80px;" id="imgBuy" :src="imgTienda(fotosTienda[index-1].idFoto)">
            <p/>
            <a>{{fotosTienda[index-1].precio}} </a>
            <img style="width:30px; height:30px;" src="@/assets/coinsIcon.png">
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
        loadingS: true,
        loadingI: true,
        fotosTienda: null,
        fotosInventario: null,
        selected: []
        
    }),

  methods: {

      imgTienda(foto){
        console.log(foto);
        return "http://35.246.75.160:443/api/returnImageProfile/" + foto;
      },

      buyPhoto(idF){
          util.unlockPic(idF)
          .then(()=>{
              this.fotosTienda = null;
              this.fotosInventario = null;
              this.selected = [];
              this.loadingS = true;
              this.loadingI = true;
              this.listPhotosShop();
              this.listMyPhotos();
          })
          .catch((error)=>{
 
                switch(error.response.status){
                    case 417:
                        console.log('No tienes suficiente dinero');
                        alert("No tienes suficientes monedas");
                }
            })
      },

      setProfPic(idF){
          var i;
          util.setProfilePick(idF)
          .then(()=>{
              console.log(this.fotosInventario)
              this.loadingI = true;
              for(i = 0; i<this.fotosInventario.length; i++){
                  if(this.fotosInventario[i].idFoto == idF){
                      this.selected[i] = true;
                  }
                  else{
                      this.selected[i] = false;
                  }
              }
              this.loadingI = false;
          })
          .catch(()=>{})
      },

      listPhotosShop(){
          util.listShopPics()
          .then((response)=>{
              console.log("Lista de fotos")
              //this.Invitaciones = response.data.nombre;
              this.fotosTienda = response.data
              this.loadingS=false;
          })
          .catch(()=>{});
      },

      listMyPhotos(){
          var i;
          auth.viewProfile()
          .then((response)=>{
              console.log(response.data);
              this.fotosInventario = response.data.fotos;
              for(i = 0; i<this.fotosInventario.length; i++){
                  if(this.fotosInventario[i].idFoto == response.data.fotPerf){
                      this.selected[i] = true;
                  }
                  else{
                      this.selected[i] = false;
                  }
              }
              this.loadingI = false;
          })
          .catch(()=>{});
      }
  },
  beforeMount(){
      this.listPhotosShop()
      this.listMyPhotos()
  }
}

</script>
