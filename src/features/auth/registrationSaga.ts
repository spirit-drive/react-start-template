import axios from "axios";
import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, delay} from "redux-saga/effects";
import { startRegistration, registrationSuccess } from './authSlice';
import { useNavigate } from 'react-router-dom';

interface RegistrationResponse {
    token: string;
}

interface RegisterFormInputs {
    // username: string;
    email: string;
    password: string;
    // confirmPassword: string;
}

const registerUser = async (data: RegisterFormInputs) => {
    const response = await axios.post('http://19429ba06ff2.vps.myjino.ru/api/signup', data);
    return response.data;
};

function* registrationSaga(action: PayloadAction<RegisterFormInputs>) {
    try {
        const response: RegistrationResponse = yield call(registerUser, action.payload); // Вызываем API
        console.log('API Response:', response);
        yield put(registrationSuccess(response.token)); // Диспатчим успешный результат

        // Добавляем небольшую задержку перед редиректом
        console.log('delay');
        yield delay(500);
        // Навигация на страницу профиля
        const navigate = useNavigate();
        console.log('navigate');
        navigate('/profile'); // Редирект на страницу профиля

    } catch (error: any) {
        console.error('Registration failed:', error);
        //yield put(registrationFailed(error.response?.data?.message || 'Ошибка регистрации')); // Обработка ошибки
    }
}

export default registrationSaga;