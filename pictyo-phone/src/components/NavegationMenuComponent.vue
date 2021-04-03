
<template>
    <div class="NavegacionComponent">
        <ul class="vertical-menu">
            <li><a href="#/Home"><img style="width:50px; height:50px;" src="../assets/homeIcon.png"></a></li>
            <li><a href="#/Profile"><img style="width:50px; height:50px;" src="../assets/userIcon.png"></a></li>
            <li><a href="#/Shop"><img style="width:50px; height:50px;" src="../assets/carritoIcon.png"></a></li>
            <li><a href="#/Friends"><img style="width:50px; height:50px;" src="../assets/amigosIcon.png"></a></li>
            <li><a href="#/Partidas"><img style="width:50px; height:50px;" src="../assets/mandoIcon.png"></a></li>
        </ul>
    </div>
</template>


<script>
export default {
  name: 'NavegacionComponent'
}
</script>


<style scoped>
    .vertical-menu{
        list-style: none;
        height: 100%;
        background: #808ae4;
        max-width: 100px;
        margin: auto;
        float: left;
    }

    .vertical-menu li{
        height: 100%;
        padding-bottom: 80px;
    }
    
</style>