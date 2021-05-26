<template>
  <div style="background-color:grey;">
      <h1 style="background-color:grey; color:white; margin:15px;">{{this.msgTitulo}}</h1>

      <!--toca ver los puntos -->
      <h4 v-if="this.mostrarPuntos" style="color: white; margin: 20px;">Votos obtenidos por los jugadores:</h4>
        <ol v-if="this.mostrarPuntos" class="listaVotos">
          <li class="list-group-item" style="border-radius: 25px;" v-for="index in puntosJugadores.length"  v-bind:key="index">
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

      <div class="puntos" v-if="this.mostrarPuntos">
        <div  v-if="this.mostrarPuntos" style="margin: 10px; display:inline-block;">
          <img v-if="this.mostrarPuntos" style="height:30px; weight:30px;" src="@/assets/starIcon.png">  
          <a v-if="this.mostrarPuntos"> +{{coinStar[0]}}     </a>
        </div>
        <div v-if="this.mostrarPuntos" style="display:inline-block; margin: 10px;">
          <img v-if="this.mostrarPuntos" style="height:30px; weight:30px;" src="@/assets/coinsIcon.png">  
          <a v-if="this.mostrarPuntos"> +{{coinStar[1]}}</a>
        </div>
      </div>

      <!--toca ver los hilos -->
      <h4 v-if="this.faseFinal" style="color: white; margin: 15px;">Historia de {{hilos[num].jugadorInicial_.nombre}}:</h4>
        <ol v-if="this.faseFinal" class="listaHistoria">
          <li class="list-group-item" style="border-radius: 25px;" v-for="index in hilos[num].size"  v-bind:key="index">
            <img id="imgPerf" :src="imgPerfil(hilos[num].respuestas_[index-1].autor_.fotPerf)">
            <a> {{hilos[num].respuestas_[index-1].autor_.nombre}}:  </a>
            <a v-if="!hilos[num].respuestas_[index-1].esDibujo">{{hilos[num].respuestas_[index-1].frase}}</a>
            <img style="background-color:white; border:1px solid black; margin: 20px; height:300px; weight:300px;" v-if="hilos[num].respuestas_[index-1].esDibujo" :src="theImg(hilos[num].respuestas_[index-1].id_)">
          </li>
        </ol>  
      
      <!--toca votar -->
        <h4 v-if="this.votando" style="color:white;">Vota al {{msgVotacion[numVotacion]}}:</h4>
        <ol v-if="this.votando" class="listaVotos">
          <li class="list-group-item" style="border-radius: 25px;" v-for="index in hilos[0].respuestas_.length"  v-bind:key="index">
            <img id="imgPerf" :src="imgPerfil(hilos[0].respuestas_[index-1].autor_.fotPerf)">
            <a> {{hilos[0].respuestas_[index-1].autor_.nombre}}  </a>
            <button class="boton" v-on:click="vote(hilos[0].respuestas_[index-1].autor_.mail)">Vote</button>
          </li>
        </ol> 

      <!--toca escribir -->

      <img style="background-color:white; border:1px solid black; margin: 10px; height: 525px; width: 525px;" v-if="this.showImg" :src="theImg(idImg)">
      <form v-if="this.adivinar" action class="form" @submit.prevent="sendAnswer">
            <label id="etiqueta" class="form-label" for="#fraseRespuesta"></label>
            <input v-model="fraseRespuesta" class="form-input" type="text" id="name" required placeholder="TU RESPUESTA">
      </form>



    <div class="dibujar">
      <!--Pizarra y dibujar -->
        <h2 style="color:black; margin:10px;" v-if="this.dibujar">{{this.frase}}</h2>
        <div class="lienzo">
          <canvas v-if="this.dibujar" id="can" 
            @mousedown="startPainting" 
            @mouseup="finishedPainting" 
            @mousemove="draw" ></canvas>
        </div>
        <div v-if="this.dibujar" id="clr">
          <div>
            <button class="colores" @click="color('red')" style="background-color: red; margin-top:20px;"></button>
          </div>
          <div>
            <button class="colores" @click="color('orange')" style="background-color: orange "></button>
          </div>
          <div>
            <button class="colores" @click="color('yellow')" style="background-color: yellow "></button>
          </div>
          <div>
            <button class="colores" @click="color('yellowgreen')" style="background-color: yellowgreen "></button>
          </div>
          <div>
            <button class="colores" @click="color('green')" style="background-color: green "></button>
          </div>
          <div>
            <button class="colores" @click="color('cyan')" style="background-color: cyan "></button>
          </div>
          <div>
            <button class="colores" @click="color('blue')" style="background-color: blue "></button>
          </div>
          <div>
            <button class="colores" @click="color('purple')" style="background-color: purple "></button>
          </div>
          <div>
            <button class="colores" @click="color('violet')" style="background-color: violet "></button>
          </div>
          <div>
            <button class="colores" @click="color('pink')" style="background-color: pink "></button>
          </div>
          <div>
            <button class="colores" @click="color('brown')" style="background-color: brown "></button>
          </div>
          <div>
            <button class="colores" @click="color('grey')" style="background-color: grey "></button>
          </div>
          <div>
            <button class="colores" @click="color('black')" style="background-color: black; margin-bottom:20px;"></button>
          </div>
        </div>

      <div v-if="this.dibujar" class="dcha">
        <div class="tam">
          <h1 style="color: white;">Pincel:</h1>
          <button class="boton" @click="puntero('5')">Pequeño</button>
          <button class="boton" @click="puntero('10')">Mediano</button>
          <button class="boton" @click="puntero('15')">Grande</button>
        </div>
        <div class="borrar">
          <button class="boton" @click="borrar()" style="margin-right:50px;">LIMPIAR </button> 
          <button><img  src="../assets/eraser.png" @click="color('white')" class="borrador"></button>
        </div>
      </div>
    </div>
    <button v-if="!this.faseFinal" class="boton" @click="back()">back</button> 
    <button v-if="this.dibujar || this.adivinar" class="boton" v-on:click="sendAnswer()">send</button> 
    <button v-if="this.faseFinal" class="boton" @click="next(false)">Previous</button>
    <button v-if="this.faseFinal" class="boton" @click="next(true)">Next</button>
    <!--button class="boton" v-on:click="resetVotos()">resetVotes</button-->
    
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
    msgTitulo:"Pictio Phone",     //Título de la página
    idImg:null,       //Id de la imagen a adivinar
    frase:"Cargando...",       //Frase que te toca dibujar
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

    /*resetVotos(){
      console.log("AAAAA");
      util.resetVotes();
    },*/

    soyYo(mail){
      return mail==this.miMail;
    },

    theImg(id){
      return "http://35.246.75.160:443/api/returnImageResponse/" + id;

    },

    imgPerfil(foto){
      return "http://35.246.75.160:443/api/returnImageProfile/" + foto;
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
                  this.msgTitulo = "¡Partida finalizada!"//"Esperando a que otros jugadores acaben de votar";
                  util.getPuntosPartida().then((puntos)=>{
                    console.log(puntos.data);
                    console.log("Huola");
                    this.puntosJugadores = puntos.data;
                    util.getPuntosJugador().then((answ)=>{
                      console.log(answ.data);
                      this.mostrarPuntos = true;
                      this.coinStar=answ.data;
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
                  this.msgTitulo = "¡Resultados finales!";
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
                  this.msgTitulo = "¡Escribe una historia!";
                }
              }
              
          })
          .catch(()=>{
            this.$router.push("/Partidas");
          });
          console.log(getClientMail());
          console.log(getGameId());
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
    border:black solid 2px;
    background-color: white;

  }

  #clr{
    position: fixed;
    top: 15%;
    left: 25%;
    background-color: rgb(49,49,49);
    width: 80px;
    border-radius: 25px;
  }

  #clr div{
    margin:5px;
  }

  .colores{
    height:30px;
    width:30px;
  }

  .dcha{
    position: fixed;
    right: 5%;
    top: 25%;
    margin:20px;
  }

  .tam{
    margin:20px;
    margin-bottom: 50px;
    background-color: rgb(49,49,49);
    border-radius: 25px;
  }

  .borrar{
    margin:20px;
    background-color: rgb(49,49,49);
    border-radius: 25px;
  }

  .listaHistoria{
    margin-left:25%;
    margin-right:25%;
    overflow:hidden; 
    overflow-y:scroll;
    height: 525px;
  }

  .listaVotos{
    margin-left:25%;
    margin-right:25%;
    overflow:hidden; 
    overflow-y:scroll;
    height: 470px;
  }

  .list-group-item{
    background-color: white;
    border: 3px solid black;
    margin: 25px;
  }

  .puntos{
    display: inline-block;
    margin:5px;
    background-color: white;
    border:3px solid black;
    border-radius: 25px;
    width:10%;
  }
  
  .borrador{
    height: 30px;
    width: 30px;
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

  .tam{
    display: block;
  }

  .boton{
    background-color:#00A6D6;
    border-color: rgb(15, 1, 80);
    color:white;
    border-width: 3px;
    border-radius: 15px;
    padding: 10px 15px;
    box-shadow: 10px;
    font-family: arial;
    font-weight: 600px;
    width: 100px;
    margin: 1em;
  }

  .boton:hover{
    background-color: rgb(15, 1, 80);
    border-color: #00A6D6;

  }

  .boton:active{
    transform: translateY(4px);
  }

</style>