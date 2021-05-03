import axios from "axios";

// Create axios client, pre-configured with baseURL
/*let APIKit = axios.create({
  baseURL: "http://localhost:8080/api/",
  timeout: 10000,
  headers: {'Content-Type': 'application/json; charset=UTF-8',
            'crossorigin': 'true',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Origin' : 'http://localhost:8081', },
});*/

// Set JSON Web Token in Client to be included in all calls
/*export const setClientToken = (token) => {
  APIKit.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};*/

export const setClientToken = (token) => {
  //APIKit.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.headers.common["Authorization"] = `${token}`;
};

export const setClientMail = (mail) => {
  //APIKit.defaults.headers.common["identificador"] = name;
  axios.defaults.headers.common["identificador"] = mail;
};

export const getClientMail = () => {
  //APIKit.defaults.headers.common["identificador"] = name;
  return axios.defaults.headers.common["identificador"];
};

export const setAutorMail = (mail) => {
  //APIKit.defaults.headers.common["identificador"] = name;
  axios.defaults.headers.common["autor"] = mail;
};

export const getAutorMail = () => {
  //APIKit.defaults.headers.common["identificador"] = name;
  return axios.defaults.headers.common["autor"];
};

export const setGameId = (id) => {
  //APIKit.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.headers.common["idPartida"] = id;
  
};

export const setInvitedName = (name) => {
  console.log( axios.defaults.headers.common);
  //APIKit.defaults.headers.common["identificador"] = name;
  axios.defaults.headers.common["idInvitado"] = name;
};

export default {
    funciona() {
      console.log("metodo a parte")
    }
}