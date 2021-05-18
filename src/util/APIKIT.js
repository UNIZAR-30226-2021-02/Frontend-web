import axios from "axios";

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  //baseURL: "http://80.39.50.206:8082/api/",
  baseURL: "http://35.246.75.160:443/api/",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// Set JSON Web Token in Client to be included in all calls
/*export const setClientToken = (token) => {
  APIKit.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};*/

export const setClientToken = (token) => {
  //APIKit.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  APIKit.defaults.headers.common["Authorization"] = `${token}`;
};

export const setClientMail = (mail) => {
  //APIKit.defaults.headers.common["identificador"] = name;
  APIKit.defaults.headers.common["identificador"] = mail;
};

export const getClientMail = () => {
  //APIKit.defaults.headers.common["identificador"] = name;
  return APIKit.defaults.headers.common["identificador"];
};

export const setAutorMail = (mail) => {
  //APIKit.defaults.headers.common["identificador"] = name;
  APIKit.defaults.headers.common["autor"] = mail;
};

export const getAutorMail = () => {
  //APIKit.defaults.headers.common["identificador"] = name;
  return APIKit.defaults.headers.common["autor"];
};

export const setGameId = (id) => {
  //APIKit.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  APIKit.defaults.headers.common["idPartida"] = id;
  
};

export const getGameId = () => {
  //APIKit.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return APIKit.defaults.headers.common["idPartida"];
  
};

export const setInvitedName = (name) => {
  console.log( APIKit.defaults.headers.common);
  //APIKit.defaults.headers.common["identificador"] = name;
  APIKit.defaults.headers.common["idInvitado"] = name;
};

export const setVotadoMail = (mail) => {
  //console.log( APIKit.defaults.headers.common);
  //APIKit.defaults.headers.common["identificador"] = name;
  APIKit.defaults.headers.common["votado"] = mail;
};

export const setIdFoto = (foto) => {
  //console.log( APIKit.defaults.headers.common);
  //APIKit.defaults.headers.common["identificador"] = name;
  APIKit.defaults.headers.common["idFoto"] = foto;
};

export default APIKit;