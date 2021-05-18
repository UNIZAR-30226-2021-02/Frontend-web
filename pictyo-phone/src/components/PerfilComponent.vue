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

      <div class="nameChangerComponent">
          <button v-if="!this.changing" class="boton" v-on:click="change()">ChangeName</button>
          <form v-if="this.changing" action class="form" @submit.prevent="changeMyName()">
              <label id="etiqueta" class="form-label" for="#newName"></label>
              <input v-model="newName" class="form-input" type="text" id="name" required placeholder="New Name" style="width:170px;">
              <input class="boton" type="submit" value="Change">
          </form>
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
    mounted: false,
    newName:"",
    changing:false
  }),

  methods:{
      myImg(){
        //console.log(this.myData[0].fotPerf)
        return "http://35.246.75.160:443/api/returnImageProfile/" + this.myData.fotPerf;
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
      },

      change(){
        this.changing = !this.changing;
      },

      changeMyName(){
          this.changing = false;
          auth.changeMyName(this.newName)
          .then(()=>{
              this.changing = false;
          })
          .catch(()=>{
          });
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

  .boton{
    display:inline-block;
    background-color:#00A6D6;
    border-color: rgb(15, 1, 80);
    color:white;
    border-width: 3px;
    border-radius: 15px;
    padding: 10px 15px;
    box-shadow: 10px;
    font-family: arial;
    margin: 5%;
  }

  .boton:hover{
    background-color: rgb(15, 1, 80);
    border-color: #00A6D6;

  }

  .boton:active{
    transform: translateY(4px);
  }

  p{
    background-color: "pink";
    flex-direction: "row";
    border-Color: "black";
    border-Radius: 9;
    border-Width: 1;
  }

</style>