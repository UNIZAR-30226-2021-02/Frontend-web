<template>
    <div class="PerfilComponent">
        <img :src="myImg()">
        <br>
        <h2>{{myData.nombre}}</h2>
        <br>

        <img style="width:30px; height:30px;" src="@/assets/penIcon.png">
        <a>   {{myData.pDibujo}}  </a>

        <img style="width:30px; height:30px;" src="@/assets/brainIcon.png">
        <a>   {{myData.pListo}}  </a>

        <img style="width:30px; height:30px;" src="@/assets/risaIcon.png">
        <a>   {{myData.pGracioso}}  </a>

        <br>
        <img style="width:30px; height:30px;" src="@/assets/starIcon.png">
        <a>   {{myData.estrellas}}  </a>

        <br>
        <img style="width:30px; height:30px;" src="@/assets/coinsIcon.png">
        <a>   {{myData.monedas}}  </a>
        
        <br>
        <img style="width:30px; height:30px;" src="@/assets/socialIcon.png">
        <a>   {{myData.nAmigos}}  </a>
    </div>
</template>


<script>

import auth from "@/logic/auth"
import {setIdFoto} from '@/util/APIKIT'

export default {
  name: 'PerfilComponent',
  
  data: () => ({
    myData: null
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