import axios from "axios";
import {setInvitedName} from '@/util/APIKIT'
import {setGameId} from '@/util/APIKIT'

const ENDPOINT_PATH = "http://localhost:8080/api/";

export default {
  
    createGame(nombre){
        const partida={nombre};
        return axios.post(ENDPOINT_PATH + "newGame", partida);
    },

    inviteFriend(nombre){
        setInvitedName(nombre);
        return axios.get(ENDPOINT_PATH + "inviteGame");
    },

    listPlayers(){
        return axios.get(ENDPOINT_PATH + "listPlayers");
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
    }

};