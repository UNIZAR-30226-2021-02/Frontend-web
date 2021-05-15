<template>
    <div class="nameChangerComponent">
        <button v-if="!this.changing" class="boton" v-on:click="change()">ChangeName</button>
        <form v-if="this.changing" action class="form" @submit.prevent="changeMyName()">
            <label id="etiqueta" class="form-label" for="#newName"></label>
            <input v-model="newName" class="form-input" type="text" id="name" required placeholder="New Name">
            <input class="boton" type="submit" value="Change">
        </form>
    </div>
</template>


<script>

import auth from "@/logic/auth"


export default {
  name: 'nameChangerComponent',
  
  data: () => ({
    newName:"",
    changing:false
  }),

  methods:{

      change(){
        this.changing = !this.changing;
      },

      changeMyName(){
          this.changing = false;
          auth.changeMyName(this.newName)
          .then(()=>{
              this.changing = false;
          })
          .catch(()=>{
          });
      }
  }
}
</script>

<style scoped>

  .boton{
    display:inline-block;
    background-color:#00A6D6;
    border-color: rgb(15, 1, 80);
    color:white;
    border-width: 3px;
    border-radius: 15px;
    padding: 10px 15px;
    box-shadow: 10px;
    font-family: arial;
    margin: 5%;
  }

  .boton:hover{
    background-color: rgb(15, 1, 80);
    border-color: #00A6D6;

  }

  .boton:active{
    transform: translateY(4px);
  }

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