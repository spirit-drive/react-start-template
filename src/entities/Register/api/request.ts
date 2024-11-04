import axios from "axios"
import { BASE_URL, COMAND_ID } from "../../../shared/fetchHelpers/fetchSettings"
import axiosInstance from "../../../shared/axiosHelper/axiosHelper";
import { TProfile } from "../../../shared/profileTypes/profileTypes";

type SignUpBody = {
    email: string;
    password: string;
    commandId: string;
};

type SignInBody = {
    email: string;
    password: string;
};

export const postRegisterApi = async (email: string, password: string) => {
    const payload: SignUpBody = {
        email,
        password,
        commandId: COMAND_ID,
    }
    const res = await axios.post(BASE_URL + '/signup', payload)

    return res.data;
}

export const postSigninApi = async (email: string, password: string) => {
    const payload: SignInBody = {
        email,
        password,
    }
    const res = await axios.post(BASE_URL + '/signin', payload)

    return res.data;
}

// Получить данные профиля
export const getProfileApi = async () => {
   const res = await axiosInstance.get('/profile');
   return res.data;
}

// Заменить данные профиля
export const postProfileApi = async (profile: TProfile) => {
    const res = await axiosInstance.post('/profile', profile);
    return res.data;
 }