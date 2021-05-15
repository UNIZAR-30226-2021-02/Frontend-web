<template>
    <div class="nameChangerComponent">
        <button class="button" v-on:click="change()">ChangeName</button>
        <form v-if="this.changing" action class="form" @submit.prevent="changeMyName()">
            <label id="etiqueta" class="form-label" for="#newName"></label>
            <input v-model="newName" class="form-input" type="text" id="name" required placeholder="New Name">
            <input class="form.submit" type="submit" value="Change">
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