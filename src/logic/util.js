import APIKit from '@/util/APIKIT';
import auth from '@/logic/auth';
import {setInvitedName} from '@/util/APIKIT'
import {setGameId} from '@/util/APIKIT'
import { setAutorMail } from "../util/APIKIT";
import { setVotadoMail } from "../util/APIKIT";

const ENDPOINT_PATH = "http://35.246.75.160:443/api/";

export default {
  
    createGame(nombre){
        const partida={nombre};
        return APIKit.post(ENDPOINT_PATH + "newGame", partida);
    },

    inviteFriend(mail){
        setInvitedName(mail);
        return APIKit.get(ENDPOINT_PATH + "inviteGame");
    },

    listPlayers(){
        auth.setClientToken(auth.getToken());
        auth.setClientMail(auth.getUserLogged());
        setInvitedName(null);
        console.log("SFDSAJNFASNDAJSDNBJASDNBASHDNBSHDB")
        console.log( APIKit.defaults.headers.common["idPartida"]);
        console.log( APIKit.defaults.headers.common["identificador"]);
        return APIKit.get(ENDPOINT_PATH + "listPlayers");
    },

    listFriendsNotInGame(){
        auth.setClientToken(auth.getToken());
        auth.setClientMail(auth.getUserLogged());
        return APIKit.get(ENDPOINT_PATH + "listFriendsGame");
    },

    listInvitaciones(){
        auth.setClientToken(auth.getToken());
        auth.setClientMail(auth.getUserLogged());
        return APIKit.get(ENDPOINT_PATH + "listInvite");
    },

    acceptInvitacion(id){
        setGameId(id);
        console.log( APIKit.defaults.headers.common["idPartida"]);
        console.log( APIKit.defaults.headers.common["identificador"]);
        return APIKit.get(ENDPOINT_PATH + "acceptInvite");
    },

    denyInvitacion(id){
        setGameId(id);
        console.log( APIKit.defaults.headers.common["idPartida"]);
        console.log( APIKit.defaults.headers.common["identificador"]);
        return APIKit.get(ENDPOINT_PATH + "denyInvite");
    },

    listGames(){
        auth.setClientToken(auth.getToken());
        auth.setClientMail(auth.getUserLogged());
        return APIKit.get(ENDPOINT_PATH + "listGames");
    },

    returnResponse(){
        return APIKit.get(ENDPOINT_PATH + "returnResponse");
    },

    textAnswer(frase,autor){
        setAutorMail(autor);
        return APIKit.post(ENDPOINT_PATH + "addText", frase);
    },

    imgAnswer(autor,img){
        console.log(img);
        setAutorMail(autor);
        return APIKit.post(ENDPOINT_PATH + "addImage2", img);
    },

    getResponses(){
        return APIKit.get(ENDPOINT_PATH + "returnAllResponses");
    },

    vote(who,fase){
        setVotadoMail(who);
        return APIKit.get(ENDPOINT_PATH + "votar" + fase);
    },

    resetVotes(){
        return APIKit.get(ENDPOINT_PATH + "resetVotos");
    },

    getPuntosPartida(){
        return APIKit.get(ENDPOINT_PATH + "puntosPartida");
    },

    getPuntosJugador(){
        return APIKit.get(ENDPOINT_PATH + "puntosJugador");
    },

    startGame(){
        return APIKit.get(ENDPOINT_PATH + "startGame");
    }

};