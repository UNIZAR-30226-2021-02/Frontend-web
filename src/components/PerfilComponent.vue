<template>
    <div class="PerfilComponent">
        <img :src="myImg()">
        <br>
        <h2>{{myData[0].nombre}}</h2>
        <br>

        <img style="width:30px; height:30px;" src="@/assets/penIcon.png">
        <a>   {{myData[0].pDibujo}}  </a>

        <img style="width:30px; height:30px;" src="@/assets/brainIcon.png">
        <a>   {{myData[0].pListo}}  </a>

        <img style="width:30px; height:30px;" src="@/assets/risaIcon.png">
        <a>   {{myData[0].pGracioso}}  </a>

        <br>
        <img style="width:30px; height:30px;" src="@/assets/starIcon.png">
        <a>   {{myData[0].estrellas}}  </a>

        <br>
        <img style="width:30px; height:30px;" src="@/assets/coinsIcon.png">
        <a>   {{myData[0].monedas}}  </a>
        
        <br>
        <img style="width:30px; height:30px;" src="@/assets/socialIcon.png">
        <a>   {{myData[0].nAmigos}}  </a>
    </div>
</template>


<script>

import auth from "@/logic/auth"

export default {
  name: 'PerfilComponent',
  
  data: () => ({
    myData: []
  }),

  methods:{
      myImg(){
        //console.log(this.myData[0].fotPerf)
        return "http://localhost:8080/api/returnImageProfile/" + this.myData[0].fotPerf;
      },

      loadData(){
        auth.viewProfile()
          .then((response)=>{
            this.myData.push(response.data);
            console.log("hola")
          })
          .catch(()=>{});
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