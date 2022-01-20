import axios from "axios";

export const api = axios.create({
  baseURL: "https://hamburgueria-api-json.herokuapp.com/",
});
