import axios from "axios";

//Потом поменять адрес
export const API_URL = "http://localhost:5111/api/";

export const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});
