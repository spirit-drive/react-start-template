import { call, put } from "redux-saga/effects";
import { saveProfile, saveToken, setAppInitiated, setError, setIsLoading } from "../authAndProfile";
import { getProfileApi, postRegisterApi, postSigninApi } from "../../../entities/Register/api/request";
import { isTRegisterProfile } from "../../../shared/fetchHelpers/registerTypeGuards";
import { isTProfile, TProfile } from "../../../shared/profileTypes/profileTypes";
import { COMAND_ID } from "../../../shared/fetchHelpers/fetchSettings";
import { isTErrorResponse, TServerError } from "../../../shared/fetchHelpers/typeGuards";
import { createAction } from "@reduxjs/toolkit";
import { UNKNOWN_ERROR_MESSAGE } from "./constant";
import { LOCAL_STORAGE_TOKEN } from "./constants";
import { jwtDecode } from "jwt-decode";

// Saga Effects. App started
export function* appInitiateSaga(data: { type: string }): any {
    yield put(setAppInitiated());

    // Проверяем если уже есть авторизация сохраненная в локальном хранилище
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

    if (token) {
        try {
            const decode = jwtDecode(token);
            if (decode.exp > Math.round(Date.now() / 1000)) {
                yield put(saveToken(token));

                // Получаем данные профиля
                const profile = yield getProfileApi();

                if (isTProfile(profile)) {
                    const newProfile: TProfile = {
                        ...profile, commandId: COMAND_ID
                    }
                    yield put(saveProfile(newProfile));
                } else {
                    throw (new Error(UNKNOWN_ERROR_MESSAGE));
                }
            }

        } catch {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN);
        }

    }
}

export const APP_INITIATED = 'authAndProfile/appInitiate';
export const appInitiated = createAction(APP_INITIATED);