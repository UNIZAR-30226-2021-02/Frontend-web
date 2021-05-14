<template>
  <div >
      <h1>{{this.msgTitulo}}</h1>

      <!--toca ver los puntos -->
      <h4 v-if="this.mostrarPuntos" id="tituloVotos">Votos obtenidos por los jugadores:</h4>
        <ol v-if="this.mostrarPuntos" id="listaVotos">
          <li class="list-group-item" v-for="index in puntosJugadores.length"  v-bind:key="index">
            <img id="imgPerf" :src="imgPerfil(puntosJugadores[index-1].idUsuario_.fotPerf)">
            <a> {{puntosJugadores[index-1].idUsuario_.nombre}}  -->   </a>
            <img style="height:30px; weight:30px;" src="@/assets/penIcon.png">
            <a>: {{puntosJugadores[index-1].pDibujo_}}   </a>
            <img style="height:30px; weight:30px;" src="@/assets/risaIcon.png">
            <a>: {{puntosJugadores[index-1].pGracioso_}}   </a>
            <img style="height:30px; weight:30px;" src="@/assets/brainIcon.png">
            <a>: {{puntosJugadores[index-1].pListo_}}   </a>
          </li>
        </ol>

      <img v-if="this.mostrarPuntos" style="height:30px; weight:30px;" src="@/assets/starIcon.png">  
      <a v-if="this.mostrarPuntos"> +{{coinStar[0]}}     </a>
      <img v-if="this.mostrarPuntos" style="height:30px; weight:30px;" src="@/assets/coinsIcon.png">  
      <a v-if="this.mostrarPuntos"> +{{coinStar[1]}}</a>

      <!--toca ver los hilos -->
      <h4 v-if="this.faseFinal" id="tituloInvitaciones">Historia de {{hilos[num].jugadorInicial_.nombre}}:</h4>
        <ol v-if="this.faseFinal" id="listaHistoria">
          <li class="list-group-item" v-for="index in hilos[num].size"  v-bind:key="index">
            <img id="imgPerf" :src="imgPerfil(hilos[num].respuestas_[index-1].autor_.fotPerf)">
            <a> {{hilos[num].respuestas_[index-1].autor_.nombre}}:  </a>
            <a v-if="!hilos[num].respuestas_[index-1].esDibujo">{{hilos[num].respuestas_[index-1].frase}}</a>
            <img v-if="hilos[num].respuestas_[index-1].esDibujo" style="height:350px; weight:350px;" :src="theImg(hilos[num].respuestas_[index-1].id_)">
          </li>
        </ol>  
      
      <!--toca votar -->
        <h4 v-if="this.votando" id="tituloVoto">Vota al {{msgVotacion[numVotacion]}}:</h4>
        <ol v-if="this.votando" id="listaVotos">
          <li class="list-group-item" v-for="index in hilos[0].respuestas_.length"  v-bind:key="index">
            <img id="imgPerf" :src="imgPerfil(hilos[0].respuestas_[index-1].autor_.fotPerf)">
            <a> {{hilos[0].respuestas_[index-1].autor_.nombre}}  </a>
            <button class="button" v-on:click="vote(hilos[0].respuestas_[index-1].autor_.mail)">Vote</button>
          </li>
        </ol> 

      <!--toca escribir -->

      <img v-if="this.showImg" :src="theImg(idImg)">
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
        <div>
          <button class="colores" @click="color('black')" style="background-color: black "></button>
        </div>
        <div>
          <button class="colores" @click="color('red')" style="background-color: red "></button>
        </div>
        <div>
          <button class="colores" @click="color('green')" style="background-color: green "></button>
        </div>
        <div>
          <button class="colores" @click="color('orange')" style="background-color: orange "></button>
        </div>
        <div>
          <button class="colores" @click="color('#FFFF00')" style="background-color: #FFFF00 "></button>
        </div>
        <div>
          <button class="colores" @click="color('#F43059')" style="background-color: #F43059 "></button>
        </div>
        <div>
          <button class="colores" @click="color('#ff00ff')" style="background-color: #ff00ff "></button>
        </div>
        <div>
          <button class="colores" @click="color('#9ecc3b')" style="background-color: #9ecc3b "></button>
        </div>
        <div>
          <button class="colores" @click="color('#fbd')" style="background-color: #fbd "></button>
        </div>
        <div>
          <button class="colores" @click="color('#fff460')" style="background-color: #fff460 "></button>
        </div>
        <div>
          <button class="colores" @click="color('#F43059')" style="background-color: #F43059 "></button>
        </div>
        <div>
          <button class="colores" @click="color('#82B82C')" style="background-color: #82B82C "></button>
        </div>
        <div>
          <button class="colores" @click="color('#0099FF')" style="background-color: #0099FF "></button>
        </div>
        <div>
          <button class="colores" @click="color('#ff00ff')" style="background-color: #ff00ff "></button>
        </div>
        <div>
          <button class="colores" @click="color('rgb(128,0,255)')" style="background-color: rgb(128,0,255) "></button>
        </div>
        <div>
          <button class="colores" @click="color('rgb(255,128,0)')" style="background-color: rgb(255,128,0) "></button>
        </div>
        <div>
          <button class="colores" @click="color('rgb(153,254,0')" style="background-color: rgb(153,254,0 "></button>
        </div>
        <div>
          <button class="colores" @click="color('rgb(18,0,255)')" style="background-color: rgb(18,0,255) "></button>
        </div>
        <div>
          <button class="colores" @click="color('rgb(255,28,0)')" style="background-color: rgb(255,28,0) "></button>
        </div>
        <div>
          <button class="colores" @click="color('rgb(13,54,0)')" style="background-color: rgb(13,54,0) "></button>
        </div>

      </div>
    <img v-if="this.dibujar" src="../assets/punto.png" alt="tamanyo 25" @click="puntero('5')" class="punteroP">
    <img v-if="this.dibujar" src="../assets/punto.png" alt="tamanyo 50" @click="puntero('10')" class="punteroM">
    <img v-if="this.dibujar" src="../assets/punto.png" alt="tamanyo 100" @click="puntero('15')" class="punteroG">


    <button v-if="this.dibujar" id="limpiar" @click="borrar()">LIMPIAR </button> 
    <img v-if="this.dibujar" src="../assets/eraser.png" alt="Borrador" @click="color('white')" class="borrador">
    <br>
    <button v-if="!this.faseFinal" class="button" @click="back()">back</button> 
    <button v-if="this.dibujar || this.adivinar" class="button" v-on:click="sendAnswer()">send</button> 
    <button v-if="this.faseFinal" class="button" @click="next(false)">Previous</button>
    <button v-if="this.faseFinal" class="button" @click="next(true)">Next</button>
    <button class="button" v-on:click="resetVotos()">resetVotes</button>
    
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
    miMail:"",
    vueCanvas:null,
    faseFinal: false,
    votando: false,
    painting:false,
    canvas:null,
    ctx:null,
    ancho:5,
    desplazamientoX:0,
    desplazamientoY:0,
    png:null,       //png a enviar
    fraseRespuesta:"", //Frase a enviar
    msgTitulo:"A",     //Título de la página
    idImg:null,       //Id de la imagen a adivinar
    frase:"A",       //Frase que te toca dibujar
    dibujar:true,   //true si te toca dibujar
    adivinar:false,   //true si te toca adivinar
    showImg:false,
    hilos: null,
    num: 0,
    fasesVotacion:["Listo", "Gracioso", "Dibujo"],
    msgVotacion:["más listo","más gracioso","mejor dibujante"],
    numVotacion:0,
    puntosJugadores: [],
    mostrarPuntos: false,
    coinStar:null
  }),

  methods: {

    resetVotos(){
      console.log("AAAAA");
      util.resetVotes();
    },

    soyYo(mail){
      return mail==this.miMail;
    },

    theImg(id){
      return "http://localhost:8080/api/returnImageResponse/" + id;

    },

    imgPerfil(foto){
      return "http://localhost:8080/api/returnImageProfile/" + foto;
    },

    next(sig){
       if(sig){
          
          if(this.num+1 >= (this.hilos[this.num].size)){
            this.faseFinal = false;
            this.votando = true;
          }
          else{
            this.num = this.num+1;
          }
       }
       else{
         if(this.num>0) this.num = this.num-1;
       }
    },

    vote(nombre){
        if(this.numVotacion < 3){
          util.vote(nombre,this.fasesVotacion[this.numVotacion]);
          this.numVotacion++;
        }
        if(this.numVotacion >= 3) {
          this.votando = false;
          this.msgTitulo = "Fin de la partida"
        }
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
      this.ctx.lineWidth = this.ancho;
      this.ctx.lineCap ="round";
      
      this.ctx.lineTo(e.clientX-this.desplazamientoX,e.clientY-this.desplazamientoY);
      this.ctx.stroke();
      //console.log(e.clientX-200); // x coordinate
      //console.log(e.clientY); // y coordinate

      this.ctx.beginPath();
      this.ctx.moveTo(e.clientX-this.desplazamientoX,e.clientY-this.desplazamientoY);
    },

    color(c){
      console.log(c);
      this.ctx.strokeStyle=c;
    },

    borrar(){
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    puntero(p){
      /*this.ctx.lineWidth =p;*/
      this.ancho=p;
      console.log(this.ctx.lineWidth);
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
      this.miMail = getClientMail();
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
                  var aux = window.innerWidth - window.innerHeight/1.5;
                  this.canvas.height = window.innerHeight/1.5;
                  this.canvas.width = window.innerWidth-aux;
                  console.log(window.innerWidth)
                  console.log(window.innerHeight/2)
                  this.desplazamientoX = this.canvas.getBoundingClientRect();
                  this.desplazamientoY = this.desplazamientoX.top;
                  //this.desplazamientoX = (this.desplazamientoX.right - this.desplazamientoX.left)/2;
                  console.log(this.desplazamientoY);
                  console.log("fdasda");
                  this.desplazamientoX = aux/2;
                  //this.desplazamientoY = 0;
                  this.adivinar = false;
                  this.showImg = false;
                  this.msgTitulo = "Dibuja la siguiente historia";

                  this.frase = response.data.frase;
                  
                }
              }
              else{
                switch(response.data.id_){
                case -4:
                  this.dibujar = false;
                  this.adivinar = false;
                  this.showImg = false;
                  this.msgTitulo = "Se ha terminado la partida";
                  util.getPuntosPartida().then((response)=>{
                    console.log(response.data);
                    this.puntosJugadores = response.data;
                    util.getPuntosJugador().then((response)=>{
                      console.log(response.data);
                      this.mostrarPuntos = true;
                      this.coinStar=response.data;
                    })
                  })
                  break;
                case -3:
                  console.log("faseFinal")
                  this.dibujar = false;
                  this.adivinar = false;
                  this.showImg = false;
                  util.getResponses().then((response)=>{
                    console.log(response.data);
                    this.hilos = response.data;
                  })

                  this.faseFinal = true;
                  this.msgTitulo = "Resultados finales!";
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

<style scoped>
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

   .colores{
     padding: 20px;
     margin:25px;
     margin-top: 10px;
   }

   ol { 
      width: 50%;
      margin: 0 auto;

      -webkit-overflow-scrolling: touch;
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

  .borrador{
    height: 60px;
    margin-top: 10px;
  }

  .punteroP{
    height: 25px;
  }

  .punteroM{
    height: 50px;
  }

  .punteroG{
    height: 100px;
  }
</style>