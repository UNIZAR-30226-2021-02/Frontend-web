import APIKit from '@/util/APIKIT';
import Cookies from "js-cookie";
import {setClientToken} from '@/util/APIKIT'
import {setClientMail} from '@/util/APIKIT'

const ENDPOINT_PATH = "http://35.246.75.160:443/api/";
//http://35.246.75.160:443/api

export default {
 
  SetUserLogged(userLogged, token){
    Cookies.set("userLogged", userLogged);
    Cookies.set("token", token);
  },

  getUserLogged(){
    return Cookies.get("userLogged");
  },

  getToken(){
    return Cookies.get("token");
  },

  deleteUserLogged(){
    Cookies.remove('userLogged');
    Cookies.remove('token');
  },

  register(nombre, mail, password) { //Funcion
    const person = {nombre, mail, password }; //Construye el objeto persona
    return APIKit.post(ENDPOINT_PATH + "register", person); //Envia peticion de post
  },
  
  login(mail,password){
      const person={mail, password};
      return APIKit.post(ENDPOINT_PATH + "login", person);
  },

  sendRequest(mail){
      console.log(mail);
      const amigo={mail};
      return APIKit.post(ENDPOINT_PATH + "sendRequest", amigo);
  },

  acceptRequest(mail){
      const amigo={mail};
      return APIKit.post(ENDPOINT_PATH + "acceptRequest", amigo);
  },

  listRequest(){
    setClientToken(this.getToken());
    setClientMail(this.getUserLogged());
    return APIKit.get(ENDPOINT_PATH + "listRequest");
  },

  listFriends(){
    setClientToken(this.getToken());
    setClientMail(this.getUserLogged());
    return APIKit.get(ENDPOINT_PATH + "listFriends");
  },

  denyRequest(mail){
    const amigo={mail};
    return APIKit.post(ENDPOINT_PATH + "denyRequest", amigo);
  },

  deleteFriend(mail){
    const amigo={mail};
    return APIKit.post(ENDPOINT_PATH + "deleteFriend", amigo);
  },

  viewProfile(){
    setClientToken(this.getToken());
    setClientMail(this.getUserLogged());
    return APIKit.get(ENDPOINT_PATH + "viewProfile");
  },

  changeMyName(nombre){
    const name={nombre};
    console.log(name);
    console.log( APIKit.defaults.headers.common)
    return APIKit.post(ENDPOINT_PATH + "changeNameProfile", name);
  }

  //APIKit.get(ENDPOINT_PATH + "listFriends");
  //APIKit.get(ENDPOINT_PATH + "listRequest");


  
};