
<template>
  <div class="ShopView">
    <div class="sidenav">
      <navegation-menu-component page="SHOP"/>
    </div>
    <div class="content">
      <shop-component/>
    </div>
    <div class="coins">
      <ul>
          <li style="">
            <!--a style="color:black; font-size: 20px; ">999</a>
            <img src="@/assets/coinsIcon.png" style="width:30px; heigth: 30px; margin-left:15px;"-->
            <p/>
            <a style="font-size: 20px; font-weight: bold;" >{{monedas}}</a>
            <img style="width:30px; height:30px; margin-left:15px;" src="@/assets/coinsIcon.png">
          </li>
      </ul>
    </div>  
  </div>
</template>

<script>
// @ is an alias to /src

import auth from "@/logic/auth"
import NavegationMenuComponent from '@/components/NavegationMenuComponent.vue'
import ShopComponent from '../components/shopComponent.vue'

export default {
  name: 'ShopView',
  components: {
    NavegationMenuComponent,
    ShopComponent
  },

  data: () => ({
    monedas: 0
  }),

  methods: {
    loadData(){
      auth.viewProfile()
      .then((response)=>{
            console.log(response);
            this.monedas = response.data.monedas;
        })
    }
  },

  beforeMount(){
    this.loadData()
  }
}
</script>

<style scoped>
  @media screen {
    html, body{
      background-color: grey;
      position: absolute;
      height: 100%;
      width: 100%;
    }

    /* Style the side navigation */
    .sidenav {
      float: left;
      background-color: white;
      border-radius: 30px;
      margin-top: 5%;
      margin-left: 3%;
    }

    /* Style the content */
    .content {
      display: inline-block;
      margin-top: 3%;
    }

    .ShopView{
      border: 5px solid rgb(49, 49, 49);
      position: absolute;
      margin-left:10%;
      margin-right: 10%;
      margin-top: 5%;
      background-color: #17151c ;
      border-radius: 25px;
      width: 80%;
      height: 80%;
    }

    .coins{
      display: inline-block;
      position:fixed;
      top: 15%;
      left: 27%;
      background-color: white;
      border-radius:60px;
      width: 150px;
    }

  }
</style>