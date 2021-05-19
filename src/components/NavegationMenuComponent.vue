
<!--template>
    <div class="NavegacionComponent">
        <ul class="vertical-menu">
            <li><a href="#/Home"><img style="width:50px; height:50px;" src="../assets/homeIcon.png"></a></li>
            <li><a href="#/Profile"><img style="width:50px; height:50px;" src="../assets/userIcon.png"></a></li>
            <li><a href="#/Shop"><img style="width:50px; height:50px;" src="../assets/carritoIcon.png"></a></li>
            <li><a href="#/Friends"><img style="width:50px; height:50px;" src="../assets/amigosIcon.png"></a></li>
            <li><a href="#/Partidas"><img style="width:50px; height:50px;" src="../assets/mandoIcon.png"></a></li>
        </ul>
    </div>
</template-->
<template>
    <div class="icon-bar">
        <a class="active" href="#/Home"><img style="width:50px; height:50px;" src="../assets/homeIcon.png"></a> 
        <a href="#/Profile"><img style="width:50px; height:50px;" src="../assets/userIcon.png"></a>
        <a href="#/Shop"><img style="width:50px; height:50px;" src="../assets/carritoIcon.png"></a>
        <a href="#/Friends"><img style="width:50px; height:50px;" src="../assets/amigosIcon.png"></a>
        <a href="#/Partidas"><img style="width:50px; height:50px;" src="../assets/mandoIcon.png"></a>
    </div>
</template>


<script>
export default {
  name: 'NavegacionComponent'
}
</script>


<style scoped>

    .icon-bar {
        width: 90px;
        background-color: white;
        border-radius: 15px;
        margin: 10px;
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
    /*.vertical-menu{
        display: table;
        background: #808ae4;
        position: relative;
        border:10px solid blueviolet;
        border-radius: 25px;
    }

    .vertical-menu li{
        padding: 20px;
    }*/

</style>