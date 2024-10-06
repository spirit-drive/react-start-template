import axios from "axios"
import { BASE_URL, COMAND_ID } from "../../../shared/fetchHelpers/fetchSettings"

type SignUpBody = {
    email: string;
    password: string;
    commandId: string;
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