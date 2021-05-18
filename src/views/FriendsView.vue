<!--template>
  <div class="FriendsView">
      <deshecho-component msg="Esto es la página de amigos"/>
      <navegation-menu-component/>
      <friend-searcher-component/>
      <friend-lists-component/>
      
  </div>
</template>

<script>
// @ is an alias to /src
import NavegationMenuComponent from '@/components/NavegationMenuComponent.vue'
import DeshechoComponent from '../components/DeshechoComponent.vue'
import friendSearcherComponent from '../components/friendSearcherComponent.vue'
import FriendListsComponent from '../components/friendListsComponent.vue'

export default {
  name: 'FriendsView',
  components: {
    NavegationMenuComponent,
    DeshechoComponent,
    friendSearcherComponent,
    FriendListsComponent
  }
}
</script-->

<template>
  <div class="FriendsView">
    <div class="sidenav">
      <navegation-menu-component/>
    </div>
    <div class="content">
      <friend-searcher-component/>
      <friend-lists-component/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavegationMenuComponent from '@/components/NavegationMenuComponent.vue'
import friendSearcherComponent from '../components/friendSearcherComponent.vue'
import FriendListsComponent from '../components/friendListsComponent.vue'

export default {
  name: 'FriendsView',
  components: {
    NavegationMenuComponent,
    friendSearcherComponent,
    FriendListsComponent
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
      border-radius: 20px;
      margin-top: 5%;
      margin-left: 3%;
      border: 5px solid blueviolet;
    }

    /* Style the content */
    .content {
      display: inline-block;
      margin-top: 3%;
    }

    .FriendsView{
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
  }
</style>
    