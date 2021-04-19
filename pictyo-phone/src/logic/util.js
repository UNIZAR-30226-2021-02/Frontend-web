import axios from "axios";
import {setInvitedName} from '@/util/APIKIT'

const ENDPOINT_PATH = "http://localhost:8080/api/";

export default {
  
    createGame(nombre){
        const partida={nombre};
        return axios.post(ENDPOINT_PATH + "newGame", partida);
    },

    inviteFriend(nombre){
        setInvitedName(nombre);
        return axios.get(ENDPOINT_PATH + "inviteGame");
    }

};