
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
</style>