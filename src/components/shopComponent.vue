<template>
  <div >

      <h4 id="tituloAdquiridos" style="color:white;">Imágenes adquiridas:</h4>
        <ol  v-if="!this.loadingI" id="listaComprables">
          <li style="display:inline-block; border-radius:25px" class="list-group-item" v-for="index in fotosInventario.length"  v-bind:key="index">
            <img style="width:80px; height:80px;" id="imgBuy" :src="imgTienda(fotosInventario[index-1].idFoto)">
            <p/>
            <a>Seleccionar</a>
          </li>
        </ol>

      <!--toca ver los puntos -->
      <h4 id="tituloTienda" style="color:white;">Tienda:</h4>
        <ol  v-if="!this.loadingS" id="listaComprables">
          <li style="display:inline-block; border-radius:25px" class="list-group-item" v-for="index in fotosTienda.length"  v-bind:key="index">
            <img style="width:80px; height:80px;" id="imgBuy" :src="imgTienda(fotosTienda[index-1].idFoto)">
            <p/>
            <a>{{fotosTienda[index-1].precio}} monedas</a>
          </li>
        </ol>


  </div>
  
</template>


<script> 
import util from "@/logic/util";

export default {
  name: 'PartidaListsComponent',
    


    data: () => ({
        loadingS: true,
        loadingI: true,
        fotosTienda: null,
        fotosInventario: null
        
    }),

  methods: {

      imgTienda(foto){
        console.log(foto);
        return "http://35.246.75.160:443/api/returnImageProfile/" + foto;
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
          util.listUnlockedPicks()
          .then((response)=>{
              console.log("Lista de fotos")
              //this.Invitaciones = response.data.nombre;
              this.fotosInventario = response.data
              this.loadingI=false;
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

<style scoped>
  #tituloTienda{
    font-weight: 300px;
    margin:50px;
    margin-top:20px;
  }
</style>
