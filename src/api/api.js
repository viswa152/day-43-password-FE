import axios from "axios";

const url = "https://password-reset-5zo8.onrender.com/";

let baseUrl = axios.create({
  baseURL: url,
});

export default baseUrl;
