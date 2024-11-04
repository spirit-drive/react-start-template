import { put } from "redux-saga/effects";
import { saveProfile, saveToken, setError, setIsLoading } from "../authAndProfile";
import { getProfileApi, postProfileApi, postRegisterApi, postSigninApi } from "../../../entities/Register/api/request";
import { isTRegisterProfile, isTUpdateProfileRaw } from "../../../shared/fetchHelpers/registerTypeGuards";
import { isTProfile, TProfile } from "../../../shared/profileTypes/profileTypes";
import { COMAND_ID } from "../../../shared/fetchHelpers/fetchSettings";
import { isTErrorResponse, TServerError } from "../../../shared/fetchHelpers/typeGuards";
import { createAction } from "@reduxjs/toolkit";
import { UNKNOWN_ERROR_MESSAGE } from "./constant";

// Saga Effects. Update profile
export function* doProfileUpdateSaga(data: { type: string, payload: TProfile }): any {

    try {
        yield put(setError({ isError: false, errorMessage: "" }));
        yield put(setIsLoading(true));

        let response = undefined;
        response = yield postProfileApi(data.payload);

        if (isTUpdateProfileRaw(response)) {
            yield put(saveProfile(response));
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

export const PROFILE_UPDATE = 'authAndProfile/doUpdate';
export const profileUpdate = createAction<TProfile>(PROFILE_UPDATE);