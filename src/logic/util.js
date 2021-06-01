import APIKit from '@/util/APIKIT';
import auth from '@/logic/auth';
import Cookies from "js-cookie";

import {setInvitedName} from '@/util/APIKIT'
import {setGameId} from '@/util/APIKIT'
import { setAutorMail } from "../util/APIKIT";
import { setVotadoMail } from "../util/APIKIT";
import { setClientToken } from "../util/APIKIT";
import { setClientMail } from "../util/APIKIT";
import { setIdFoto } from "../util/APIKIT";
import { setMonedas } from "../util/APIKIT";


const ENDPOINT_PATH = "http://35.246.75.160:443/api/";

export default {
  
    setGameIdCookies(id){
        Cookies.set("idPartida", id);
      },
    
    getGameIdCookies(){
    return Cookies.get("idPartida");
    },


    //Game screen functions

    createGame(nombre){
        const partida={nombre};
        return APIKit.post(ENDPOINT_PATH + "newGame", partida);
    },

    inviteFriend(mail){
        setInvitedName(mail);
        return APIKit.get(ENDPOINT_PATH + "inviteGame");
    },

    listPlayers(){
        setGameId(this.getGameIdCookies());
        setClientToken(auth.getToken());
        setClientMail(auth.getUserLogged());
        setInvitedName(null);
        console.log("SFDSAJNFASNDAJSDNBJASDNBASHDNBSHDB")
        console.log( APIKit.defaults.headers.common["idPartida"]);
        console.log( APIKit.defaults.headers.common["identificador"]);
        return APIKit.get(ENDPOINT_PATH + "listPlayers");
    },

    listFriendsNotInGame(){
        setGameId(this.getGameIdCookies());
        setClientToken(auth.getToken());
        setClientMail(auth.getUserLogged());
        return APIKit.get(ENDPOINT_PATH + "listFriendsGame");
    },

    listInvitaciones(){
        setClientToken(auth.getToken());
        setClientMail(auth.getUserLogged());
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
        setClientToken(auth.getToken());
        setClientMail(auth.getUserLogged());
        return APIKit.get(ENDPOINT_PATH + "listGames");
    },


    //In game functions

    returnResponse(){
        setClientToken(auth.getToken());
        setClientMail(auth.getUserLogged());
        setGameId(this.getGameIdCookies());
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
        setGameId(this.getGameIdCookies());
        return APIKit.get(ENDPOINT_PATH + "returnAllResponses");
    },

    vote(who,fase){
        setVotadoMail(who);
        return APIKit.get(ENDPOINT_PATH + "votar" + fase);
    },

    getPuntosPartida(){
        return APIKit.get(ENDPOINT_PATH + "puntosPartida");
    },

    getPuntosJugador(){
        return APIKit.get(ENDPOINT_PATH + "puntosJugador");
    },

    startGame(){
        return APIKit.get(ENDPOINT_PATH + "startGame");
    },


    //      SHOP FUNCTIONS

    listShopPics(){
        setClientToken(auth.getToken());
        setClientMail(auth.getUserLogged());
        return APIKit.get(ENDPOINT_PATH + "listLockedPictures");
    },

    listUnlockedPicks(){
        setClientToken(auth.getToken());
        setClientMail(auth.getUserLogged());
        return APIKit.get(ENDPOINT_PATH + "listUnlockedPictures");
    },

    unlockPic(idFoto){
        setIdFoto(idFoto);
        return APIKit.get(ENDPOINT_PATH + "unlockPicture");
    },

    setProfilePick(idFoto){
        setIdFoto(idFoto);
        return APIKit.get(ENDPOINT_PATH + "changeImageProfile");
    },

    setMoney(){
        setClientToken(auth.getToken());
        setClientMail(auth.getUserLogged());
        setMonedas(200);
        return APIKit.get(ENDPOINT_PATH + "setMonedas");
    }



};