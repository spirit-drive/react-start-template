import {all, takeEvery, takeLatest} from 'redux-saga/effects';
import { startLogin, startRegistration } from '../features/auth/authSlice';
import { startLoading } from '../pages/slice/profileSlice';
import { startProductsLoading} from '../pages/slice/productsSlice';

import loginSaga from '../features/auth/authSaga';
import registrationSaga from '../features/auth/registrationSaga';
import profileSaga from '../pages/sagas/profileSaga';
import {productsSaga} from "src/pages/sagas/productsSaga";

export default function* rootSaga() {
    yield all([
        takeEvery(startLogin.type, loginSaga),
        takeEvery(startRegistration, registrationSaga),
        takeEvery(startLoading, profileSaga),
        takeEvery(startProductsLoading, productsSaga),
    ]);
}
