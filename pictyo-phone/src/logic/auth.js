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
  },

  sendRequest(nombre){
      console.log(nombre);
      const amigo={nombre};
      return axios.post(ENDPOINT_PATH + "sendRequest", amigo);
  },

  acceptRequest(nombre){
      const amigo={nombre};
      return axios.post(ENDPOINT_PATH + "acceptRequest", amigo);
  },

  listRequest(){
    return axios.get(ENDPOINT_PATH + "listRequest");
  },

  listFriends(){
    return axios.get(ENDPOINT_PATH + "listFriends");
  },

  denyRequest(nombre){
    const amigo={nombre};
    return axios.post(ENDPOINT_PATH + "denyRequest", amigo);
  },

  deleteFriend(nombre){
    const amigo={nombre};
    return axios.post(ENDPOINT_PATH + "deleteFriend", amigo);
  },

  async getAvatar(nombre){
    const amigo={nombre};
    return axios.post(ENDPOINT_PATH + "viewProfile", amigo);
  },

  //axios.get(ENDPOINT_PATH + "listFriends");
  //axios.get(ENDPOINT_PATH + "listRequest");


  
};