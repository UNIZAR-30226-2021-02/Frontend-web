import axios from "axios";
import {setInvitedName} from '@/util/APIKIT'
import {setGameId} from '@/util/APIKIT'
import { setAutorMail } from "../util/APIKIT";

const ENDPOINT_PATH = "http://localhost:8080/api/";

export default {
  
    createGame(nombre){
        const partida={nombre};
        return axios.post(ENDPOINT_PATH + "newGame", partida);
    },

    inviteFriend(mail){
        setInvitedName(mail);
        return axios.get(ENDPOINT_PATH + "inviteGame");
    },

    listPlayers(){
        setInvitedName(null);
        console.log("SFDSAJNFASNDAJSDNBJASDNBASHDNBSHDB")
        console.log( axios.defaults.headers.common["idPartida"]);
        console.log( axios.defaults.headers.common["identificador"]);
        return axios.get(ENDPOINT_PATH + "listPlayers");
    },

    listFriendsNotInGame(){
        return axios.get(ENDPOINT_PATH + "listFriendsGame");
    },

    listInvitaciones(){
        return axios.get(ENDPOINT_PATH + "listInvite");
    },

    acceptInvitacion(id){
        setGameId(id);
        console.log( axios.defaults.headers.common["idPartida"]);
        console.log( axios.defaults.headers.common["identificador"]);
        return axios.get(ENDPOINT_PATH + "acceptInvite");
    },

    denyInvitacion(id){
        setGameId(id);
        console.log( axios.defaults.headers.common["idPartida"]);
        console.log( axios.defaults.headers.common["identificador"]);
        return axios.get(ENDPOINT_PATH + "denyInvite");
    },

    listGames(){
        return axios.get(ENDPOINT_PATH + "listGames");
    },

    returnResponse(){
        return axios.get(ENDPOINT_PATH + "returnResponse");
    },

    textAnswer(frase,autor){
        setAutorMail(autor);
        return axios.post(ENDPOINT_PATH + "addText", frase);
    },

    startGame(){
        return axios.get(ENDPOINT_PATH + "startGame");
    }

};