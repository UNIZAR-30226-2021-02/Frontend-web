<template>
    <div class="PerfilComponent">
        <img v-if="this.mounted" :src="myImg()">
        <br>
        <h2 v-if="this.mounted">{{myData.nombre}}</h2>
        <br>

        <img v-if="this.mounted" style="width:30px; height:30px;" src="@/assets/penIcon.png">
        <a v-if="this.mounted">   {{myData.pDibujo}}  </a>

        <img v-if="this.mounted" style="width:30px; height:30px;" src="@/assets/brainIcon.png">
        <a v-if="this.mounted">   {{myData.pListo}}  </a>

        <img v-if="this.mounted" style="width:30px; height:30px;" src="@/assets/risaIcon.png">
        <a v-if="this.mounted">   {{myData.pGracioso}}  </a>

        <br>
        <img v-if="this.mounted" style="width:30px; height:30px;" src="@/assets/starIcon.png">
        <a v-if="this.mounted">   {{myData.estrellas}}  </a>

        <br>
        <img v-if="this.mounted" style="width:30px; height:30px;" src="@/assets/coinsIcon.png">
        <a v-if="this.mounted">   {{myData.monedas}}  </a>
        
        <br>
        <img v-if="this.mounted" style="width:30px; height:30px;" src="@/assets/socialIcon.png">
        <a v-if="this.mounted">   {{myData.nAmigos}}  </a>
    </div>
</template>


<script>

import auth from "@/logic/auth"
import {setIdFoto} from '@/util/APIKIT'

export default {
  name: 'PerfilComponent',
  
  data: () => ({
    myData: null,
    mounted: false
  }),

  methods:{
      myImg(){
        //console.log(this.myData[0].fotPerf)
        return "http://localhost:8080/api/returnImageProfile/" + this.myData.fotPerf;
      },

      loadData(){
        auth.viewProfile()
          .then((response)=>{
            console.log(response);
            this.myData = response.data;
            console.log(response.data.fotPerf)
            setIdFoto(response.data.fotPerf)
            this.mounted = true;
          })
          .catch((error)=>{console.log(error);});
      }
  },
  beforeMount(){
    this.loadData()
  }
}
</script>

<style scoped>
    img{
      height: 10%;
      width: 10%;
    }

    p{
       background-color: "pink";
        flex-direction: "row";
        border-Color: "black";
        border-Radius: 9;
        border-Width: 1;
    }
</style>