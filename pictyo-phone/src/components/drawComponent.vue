<template>
  <div>
      <canvas id="can" 
        @mousedown="startPainting" 
        @mouseup="finishedPainting" 
        @mousemove="draw"  ></canvas>
      <div id="clr">
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
    <button class="button" v-on:click="sendPNG()">send</button> 
  </div>
</template>

<script> 
export default {
  name: 'drawComponent',

  data: () => ({
    vueCanvas:null,
    painting:false,
    canvas:null,
    ctx:null,
    desplazamiento:0,
    png:null,
  }),

  methods: {
    
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
      
      this.ctx.lineTo(e.clientX-this.desplazamiento,e.clientY);
      this.ctx.stroke();
      //console.log(e.clientX-200); // x coordinate
      //console.log(e.clientY); // y coordinate

      this.ctx.beginPath();
      this.ctx.moveTo(e.clientX-this.desplazamiento,e.clientY);
    },

    sendPNG(){
        this.png = this.canvas.toDataURL("image/png");
        console.image(this.png);
    },

    back(){
        this.$router.push("/home");
      }
    },

    

    mounted() {
      this.canvas=document.getElementById("can");
      this.ctx = this.canvas.getContext("2d");  
      // Resize canvas
      this.canvas.height = window.innerHeight/2;
      this.canvas.width = window.innerWidth/2;
      this.desplazamiento = window.innerHeight/2;
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