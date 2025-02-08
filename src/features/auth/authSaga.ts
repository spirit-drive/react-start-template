import { call, put } from 'redux-saga/effects';
import { setToken, loginFailure, setRole} from './authSlice';
import axios from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';

interface LoginResponse {
    token: string;
    user: { name: string; email: string };
}

interface LoginAction extends PayloadAction<{ email: string; password: string; role: string }> {}

// Функция для отправки запроса на сервер
const loginUser = async (data: { email: string; password: string; role: string }) => {
    const response = await axios.post('http://19429ba06ff2.vps.myjino.ru/api/signin', data);
    return response.data;
};

function* loginSaga(action: LoginAction): Generator<any, void, LoginResponse> {
    try {
        // Вызов API
        const response: LoginResponse = yield call(loginUser, action.payload);

        // Сохранение токена в Redux
        yield put(setToken(response.token));
        yield put(setRole(action.payload.role)); //на сколько это правильное решение?

        // Дополнительные действия, например, редирект
        console.log('User logged in successfully:', response.user);
    } catch (error) {
        console.error('Login failed', error);
        yield put(loginFailure(error.message));
        // Обработка ошибок, если нужно
    }
}

export default loginSaga;
