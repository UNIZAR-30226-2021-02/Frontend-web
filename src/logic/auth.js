import axios from "axios";

const ENDPOINT_PATH = "http://localhost:8080/api/";

export default {
  
  register(nombre, mail, password) { //Funcion
    const person = {nombre, mail, password }; //Construye el objeto persona
    return axios.post(ENDPOINT_PATH + "register", person); //Envia peticion de post
  },
  
  login(nombre,password){
      const person={nombre, password};
      return axios.post(ENDPOINT_PATH + "login", person);
  }
};