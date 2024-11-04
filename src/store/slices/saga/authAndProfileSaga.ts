import { put } from "redux-saga/effects";
import { saveProfile, saveToken, setError, setIsLoading } from "../authAndProfile";
import { getProfileApi, postRegisterApi, postSigninApi } from "../../../entities/Register/api/request";
import { isTRegisterProfile } from "../../../shared/fetchHelpers/registerTypeGuards";
import { isTProfile, TProfile } from "../../../shared/profileTypes/profileTypes";
import { COMAND_ID } from "../../../shared/fetchHelpers/fetchSettings";
import { isTErrorResponse, TServerError } from "../../../shared/fetchHelpers/typeGuards";
import { createAction } from "@reduxjs/toolkit";
import { UNKNOWN_ERROR_MESSAGE } from "./constant";
import { LOCAL_STORAGE_TOKEN } from "./constants";

// Saga Effects
export function* doProfileRegisterSaga(data: { type: string, payload: { isNewUser: boolean, email: string, password: string } }): any {
    try {
        yield put(setError({ isError: false, errorMessage: "" }));
        yield put(setIsLoading(true));

        let response = undefined;
        if (data.payload.isNewUser) {
            response = yield postRegisterApi(data.payload.email, data.payload.password);
        } else {
            response = yield postSigninApi(data.payload.email, data.payload.password);
        }

        if (isTRegisterProfile(response)) {
            localStorage.setItem(LOCAL_STORAGE_TOKEN, response.token);
            yield put(saveToken(response.token));
            // Получаем данные профиля
            const profile = yield getProfileApi();

            if (isTProfile(profile)) {
                const newProfile: TProfile = {
                    ...profile, commandId: COMAND_ID
                }
                yield put(saveProfile(newProfile));
            }
        } else {
            throw (new Error(UNKNOWN_ERROR_MESSAGE));
        }

    } catch (error: unknown) {
        if (isTErrorResponse(error)) {
            let allErrors = "";
            error.response.data.errors.forEach((e: TServerError) => allErrors += e.message)

            yield put(setError({ isError: true, errorMessage: allErrors }))
        } else {
            yield put(setError({ isError: true, errorMessage: UNKNOWN_ERROR_MESSAGE }))
        }
    } finally {
        yield put(setIsLoading(false));
    }

}

export const PROFILE_REGISTER = 'authAndProfile/doRegister';
export const profileRegister = createAction<{ isNewUser: boolean, email: string, password: string }>(PROFILE_REGISTER);