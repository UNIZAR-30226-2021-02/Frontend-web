<template>
    <div class="PerfilComponent">
      <div class="profile-name">
        <img v-if="this.mounted" :src="myImg()">

        <h2 v-if="this.mounted">{{myData.nombre}}</h2>

      </div>

      <div class="dibujo">
        <img  v-if="this.mounted" style="width:30px; height:30px; margin:5px;" src="@/assets/penIcon.png">
        <a v-if="this.mounted" style="margin: 5px;">   {{myData.pDibujo}}  </a>
      </div>

      <div class="listo">
        <img  v-if="this.mounted" style="width:30px; height:30px; margin:5px;" src="@/assets/brainIcon.png">
        <a v-if="this.mounted" style="margin: 5px;">   {{myData.pListo}}  </a>
      </div>

      <div class="gracioso">
        <img  v-if="this.mounted" style="width:30px; height:30px; margin:5px;" src="@/assets/risaIcon.png">
        <a v-if="this.mounted" style="margin: 5px;">   {{myData.pGracioso}}  </a>
      </div>


      <div class="puntos">
        <img v-if="this.mounted" style="width:30px; height:30px;  margin:5px;" src="@/assets/starIcon.png">
        <a v-if="this.mounted" style="margin: 5px;">   {{myData.estrellas}}  </a>

        <br>
        <img v-if="this.mounted" style="width:30px; height:30px;  margin:5px;" src="@/assets/coinsIcon.png">
        <a v-if="this.mounted" style="margin: 5px;">   {{myData.monedas}}  </a>
        
        <br>
        <img v-if="this.mounted" style="width:30px; height:30px;  margin:5px;" src="@/assets/socialIcon.png">
        <a v-if="this.mounted" style="margin: 5px;">   {{myData.nAmigos}}  </a>
      </div>

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

  .profile-name{
    border: 2px solid blueviolet;
    background-color: white;
    border-radius: 50px;
    margin-bottom: 20px;
  }

  .profile-name img{
    margin: 5%;
    margin-left: 10%;
  }

  .profile-name h2{
    margin-bottom: 15px;
  }

  .dibujo{
    display: inline-block;
    margin:10px;
    background-color: white;
    border: 2px solid blueviolet;
    border-radius: 15px;
  }

  .listo{
    display: inline-block;
    margin:10px;
    background-color: white;
    border: 2px solid blueviolet;
    border-radius: 15px;
  }

  .gracioso{
    display: inline-block;
    margin:10px;
    background-color: white;
    border: 2px solid blueviolet;
    border-radius: 15px;
  }

  .puntos{
    margin: 10%;
    margin-bottom: 20px;
    background-color: white;
    border: 2px solid blueviolet;
    border-radius: 15px;
  }

  p{
    background-color: "pink";
    flex-direction: "row";
    border-Color: "black";
    border-Radius: 9;
    border-Width: 1;
  }

</style>