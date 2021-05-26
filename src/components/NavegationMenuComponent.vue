
<!--template>
    <div class="icon-bar">
        <a class="active" href="#/Home"><img style="width:50px; height:50px;" src="../assets/homeIcon.png"></a> 
        <a href="#/Profile"><img style="width:50px; height:50px;" src="../assets/userIcon.png"></a>
        <a href="#/Shop"><img style="width:50px; height:50px;" src="../assets/carritoIcon.png"></a>
        <a href="#/Friends"><img style="width:50px; height:50px;" src="../assets/amigosIcon.png"></a>
        <a href="#/Partidas"><img style="width:50px; height:50px;" src="../assets/mandoIcon.png"></a>
    </div>
</template>

<a v-if="bHome"  href="#/Home"><img style="width:50px; height:50px;" src="../assets/homeIcon.png"></a> 
<a v-if="!bHome" class="active" href="#/Home"><img style="width:50px; height:50px;" src="../assets/homeIcon.png"></a>     

<script>
export default {
  name: 'NavegacionComponent'
}
</script-->
<template>
    <div class="icon-bar">
        <a v-if="bPartidas" href="#/Partidas"><img style="width:70px; height:70px;" src="../assets/mandoIcon.png"></a>
        <a v-if="!bPartidas" class="active" href="#/Partidas"><img style="width:70px; height:70px;" src="../assets/mandoIcon.png"></a>

        <a v-if="bProfile" href="#/Profile"><img style="width:70px; height:70px;" src="../assets/userIcon.png"></a>
        <a v-if="!bProfile" class="active" href="#/Profile"><img style="width:70px; height:70px;" src="../assets/userIcon.png"></a>
        
        <a v-if="bShop" href="#/Shop"><img style="width:70px; height:70px;" src="../assets/carritoIcon.png"></a>
        <a v-if="!bShop" class="active" href="#/Shop"><img style="width:70px; height:70px;" src="../assets/carritoIcon.png"></a>
        
        <a v-if="bFriends" href="#/Friends"><img style="width:70px; height:70px;" src="../assets/amigosIcon.png"></a>
        <a v-if="!bFriends" class="active" href="#/Friends"><img style="width:70px; height:70px;" src="../assets/amigosIcon.png"></a>
    </div>
</template>


<script>
export default {
  name: 'NavegacionComponent',

  props: ['page'],

  data: () => ({
        bHome: true,
        bProfile: true,
        bShop: true,
        bFriends: true,
        bPartidas: true,
    }),

     methods: {
        loadTipo(){
            switch(this.page){
                //case "HOME":
                  //  this.bHome = false;
                  //  break;
                case "PROFILE":
                    this.bProfile = false;
                    break;
                case "SHOP":
                    this.bShop = false;
                    break;
                case "FRIENDS":
                    this.bFriends = false;
                    break;
                case "PARTIDAS":
                    this.bPartidas = false;
                    break;
            }
        }
    },
    beforeMount(){
        this.loadTipo()
        console.log(this.page);
    }
}
</script>

<style scoped>

    .icon-bar {
        background-color: white;
        margin: 20px;
    }

    .icon-bar a {
        display: block;
        text-align: center;
        padding: 16px;
        transition: all 0.3s ease;
        font-size: 36px;
        margin: 3px;
    }

    .icon-bar a:hover {
        background-color: darkblue;
        border-radius: 15px;
    }

    .active {
        background-color: blue;
        border-radius: 15px;
    }
</style>
