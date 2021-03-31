import axios from "axios";

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: "http://localhost:8080/api/",
  timeout: 10000,
  headers: {'Content-Type': 'application/json; charset=UTF-8',
            'crossorigin': 'true',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Origin' : 'http://localhost:8081', },
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = (token) => {
  APIKit.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};


export default {
  methods: {
    funciona() {
      console.log("metodo a parte")
    }
  }
}