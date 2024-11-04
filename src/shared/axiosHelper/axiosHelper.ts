import axios from "axios";
import { BASE_URL } from "../fetchHelpers/fetchSettings";

const axiosInstance = axios.create({
    baseURL: BASE_URL
})

axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    if(token){
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
})

export default axiosInstance;