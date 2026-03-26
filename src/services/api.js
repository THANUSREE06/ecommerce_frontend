import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommercebackend-production-2919.up.railway.app/api"
});

export default API;
