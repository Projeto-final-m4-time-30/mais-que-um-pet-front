import axios from "axios";

export const Api = axios.create({
  baseURL: "https://mais-que-um-pet.herokuapp.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});