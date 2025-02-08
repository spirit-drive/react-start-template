import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { setProfile, loadingFailed, startLoading } from 'src/pages/slice/profileSlice';

// Тип данных профиля
interface ProfileResponse {
    id: string;
    email: string;
    signUpDate: string;
}

// Функция для получения токена из локального хранилища
const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
};

// Функция для выполнения запроса к API
const fetchProfile = async (token: string) => {
    const response = await axios.get('http://19429ba06ff2.vps.myjino.ru/api/profile', {
        headers: { Authorization: `Bearer ${token}` }, // Передаем токен в заголовке
    });
    return response.data;
};

// Сага для загрузки профиля
function* profileSaga() {
    try {
        const token = getTokenFromLocalStorage(); // Получаем токен из локального хранилища

        console.log('token:', token);

        if (!token) {
            throw new Error('Токен не найден'); // Если токен не найден, выбрасываем ошибку
        }

        //yield put(startLoading()); // Устанавливаем состояние загрузки в true
        const data: ProfileResponse = yield call(fetchProfile, token); // Делаем запрос к API с токеном
        yield put(setProfile(data)); // Если запрос успешен, сохраняем данные профиля в Redux
    } catch (error) {
        yield put(loadingFailed(error.message || 'Не удалось загрузить профиль')); // В случае ошибки, обновляем состояние с ошибкой
    }
}

export default profileSaga;