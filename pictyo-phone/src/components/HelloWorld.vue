<template>
  <div class="hello">
    <form>
        <ul>
            <li>
                <label for="name">Username: </label>
                <input type="text" id="name" name="name">
            </li>
            <li>
                <label for="pass">Password: </label>
                <input type="password" id="pass" name="pass">
            </li>
            <li>
                <button type="button" id="boton" value="save">Sing in</button>
            </li>
            <li>
              <button @click="goTo('/singUp')">Register</button>
              <Router/>
              <app-router></app-router>
            </li>
        </ul>
    </form>
  </div>
</template>

<script>
import Router from "./Router";

export default {
  name: 'HelloWorld',
  components: {
    Router
  },
  methods: {
    goTo(route){
      window.location = "/singUp";
      console.log(route);
    }
  }
};

</script>

<style scoped>
 form {
    margin: 0 auto;
    width: 400px;
    padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  form li + li {
    margin-top: 1em;
 }

  label {
    display: inline-block;
    width: 90px;
    text-align: right;
  }

  input{
    font: 1em sans-serif;
    width: 300px;
    box-sizing: border-box;
    border: 1px solid black;
  }

  input:focus{
    border-color: #999;
  }

  .button {
    padding-left: 90px;
  }

  button{
    margin-left: .5em;
  }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
