import axios from "axios";

const api = axios.create({
    baseURL: 'http://34.125.247.253/api',
})

export default api;
