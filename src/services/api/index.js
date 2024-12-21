import axios from "axios";

export const api = axios.create({
    baseURL: 'https://kingfish-loved-eft.ngrok-free.app'
})