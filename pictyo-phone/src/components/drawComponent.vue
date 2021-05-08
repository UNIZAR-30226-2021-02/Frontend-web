<template>
  <div >
      <h1>{{this.msgTitulo}}</h1>

      <!--toca escribir -->

      <img v-if="this.showImg" :src="theImg()">
      <form v-if="this.adivinar" action class="form" @submit.prevent="sendAnswer">
            <label id="etiqueta" class="form-label" for="#fraseRespuesta"></label>
            <input v-model="fraseRespuesta" class="form-input" type="text" id="name" required placeholder="TU RESPUESTA">
      </form>




      <!--Pizarra y dibujar -->
      <h2 v-if="this.dibujar">{{this.frase}}</h2>
      <canvas v-if="this.dibujar" id="can" 
        @mousedown="startPainting" 
        @mouseup="finishedPainting" 
        @mousemove="draw"  ></canvas>
      <div v-if="this.dibujar" id="clr">
        <div style="background-color:black;"></div>
        <div style="background-color:red;"></div>
        <div style="background-color:green;"></div>
        <div style="background-color:orange;"></div>
        <div style="background-color:#FFFF00;"></div>
        <div style="background-color:#F43059;"></div>
        <div style="background-color:#ff00ff;"></div>
        <div style="background-color:#9ecc3b;"></div>
        <div style="background-color:#fbd;"></div>
        <div style="background-color:#fff460;"></div>
        <div style="background-color:#F43059;"></div>
        <div style="background-color:#82B82C;"></div>
        <div style="background-color:#0099FF;"></div>
        <div style="background-color:#ff00ff;"></div>
        <div style="background-color:rgb(128,0,255);"></div>
        <div style="background-color:rgb(255,128,0);"></div>
        <div style="background-color:rgb(153,254,0);"></div>
        <div style="background-color:rgb(18,0,255);"></div>
        <div style="background-color:rgb(255,28,0);"></div>
        <div style="background-color:rgb(13,54,0);"></div>
      </div>
    <a id="limpiar" href="#">LIMPIAR </a> 
    <a id="borrador" href="#"> BORRADOR</a>
    <br>
    <button class="button" @click="back()">back</button> 
    <button class="button" v-on:click="sendAnswer()">send</button> 
  </div>
  
</template>

<script> 
import util from "@/logic/util";
import {getGameId} from '@/util/APIKIT'
import {setGameId} from '@/util/APIKIT'
import {getClientMail} from '@/util/APIKIT'
export default {
  name: 'drawComponent',

  data: () => ({
    vueCanvas:null,
    painting:false,
    canvas:null,
    ctx:null,
    desplazamientoX:0,
    desplazamientoY:0,
    png:null,       //png a enviar
    fraseRespuesta:"", //Frase a enviar
    msgTitulo:"A",     //Título de la página
    idImg:null,       //Id de la imagen a adivinar
    frase:"A",       //Frase que te toca dibujar
    dibujar:true,   //true si te toca dibujar
    adivinar:false,   //true si te toca adivinar
    showImg:false
  }),

  methods: {

    theImg(){
      return "http://localhost:8080/api/returnImageResponse/" + this.idImg;

    },
    
    startPainting(e) {
      this.painting = true;
      console.log(this.painting)
      this.draw(e)
    },  

    finishedPainting() {
      this.painting = false;
      //console.log(this.painting);
      this.ctx.beginPath()
    },

    draw(e) {
      if(!this.painting) return
      this.ctx.lineWidth = 5;
      this.ctx.lineCap ="round";
      
      this.ctx.lineTo(e.clientX-this.desplazamientoX,e.clientY-this.desplazamientoY);
      this.ctx.stroke();
      //console.log(e.clientX-200); // x coordinate
      //console.log(e.clientY); // y coordinate

      this.ctx.beginPath();
      this.ctx.moveTo(e.clientX-this.desplazamientoX,e.clientY-this.desplazamientoY);
    },

    sendAnswer(){
      if(this.adivinar){
        console.log("ENVIANDO FRASE")
        util.textAnswer(this.fraseRespuesta,getClientMail())
        .then(()=> {
          setGameId("");
          this.$router.push("/Partidas");
        })
        .catch(()=>{
        });

      }
      else if(this.dibujar){
        console.log("ENVIANDO DIBUJO");
        this.png = this.canvas.toDataURL("image/png");
        util.imgAnswer(getClientMail(),this.png)
        .then(()=> {
          setGameId("");
          this.$router.push("/Partidas");
        })
        .catch(()=>{
          console.log("EEEEEEEEEEEEEEEEEEE");
          console.log("AAAAAAAAAAAAAAAAH")
        });
      }
        
    },

    myImg(){
        //console.log(this.myData[0].fotPerf)
        var img = util.getImg(this.idImg);
        return img
    },

    back(){
        this.$router.push("/Partidas");
      }
    },

    

    mounted() {
      
      console.log(getGameId());
      util.returnResponse()
          .then((response)=>{
            console.log(response.data)
              if(response.data.id_ >= 0){
                if(response.data.esDibujo){
                  console.log("Partida acabada")
                  this.dibujar = false;
                  this.adivinar = true;
                  this.idImg = response.data.id_;
                  this.showImg = true;
                  this.msgTitulo = "Describe la siguiente escena";
                  
                }
                else{
                  this.canvas=document.getElementById("can");
                  this.ctx = this.canvas.getContext("2d");  
                  // Resize canvas
                  this.canvas.height = window.innerHeight/2;
                  this.canvas.width = window.innerWidth/2;
                  this.desplazamientoX = this.canvas.getBoundingClientRect();
                  this.desplazamientoY = this.desplazamientoX.top;
                  this.desplazamientoX = (this.desplazamientoX.right - this.desplazamientoX.left)/2;
                  console.log(this.desplazamientoY);
                  console.log("fdasda");
                  //this.desplazamientoY = 0;
                  this.adivinar = false;
                  this.showImg = false;
                  this.msgTitulo = "Dibuja la siguiente historia";

                  this.frase = response.data.frase;
                  
                }
              }
              else{
                switch(response.data.id_){
                case -3:
                  console.log("Partida acabada")
                  this.dibujar = false;
                  this.adivinar = false;
                  this.showImg = false;
                  this.msgTitulo = "Partida finalizada";
                  break;
                case -2:
                  console.log("Turno acabado")
                  this.dibujar = false;
                  this.adivinar = false;
                  this.showImg = false;
                  this.msgTitulo = "Ya has acabado tu turno";
                  break;
                default:
                  console.log("Primer turno")
                  this.dibujar = false;
                  this.adivinar = true;
                  this.showImg = false;
                  this.msgTitulo = "Escribe una historia!";
                }
              }
              
          });
    }
}
</script>

<style>
*{
   margin:0;
   user-select: none;
   -webkit-user-select: none;
   -moz-user-select: none;
   font-family: Georgia, sans-serif;
}
canvas{
   cursor: crosshair;
   border:black solid 1px;

}
#clr div{
   cursor:pointer;
   width:20px;
   height:20px;
   float:left;
}
</style>