<template>
    <div class="PerfilComponent">
        <img :src="myImg()">
        
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
        console.log(this.myData[0])
        return "http://localhost:8080/api/returnImageProfile/" + this.myData[0].fotPerf;
      },

      loadData(){
        auth.getAvatar()
          .then((response)=>{
            this.myData.push(response.data);
          })
          .catch(()=>[]);
      }
  },
  beforeMount(){
    this.loadData()
  }
}
</script>