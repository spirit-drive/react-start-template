import { call, put } from "redux-saga/effects";
import { logOut, saveProfile, saveToken, setAppInitiated, setError, setIsLoading } from "../authAndProfile";
import { getProfileApi, postRegisterApi, postSigninApi } from "../../../entities/Register/api/request";
import { isTRegisterProfile } from "../../../shared/fetchHelpers/registerTypeGuards";
import { isTProfile, TProfile } from "../../../shared/profileTypes/profileTypes";
import { COMAND_ID } from "../../../shared/fetchHelpers/fetchSettings";
import { isTErrorResponse, TServerError } from "../../../shared/fetchHelpers/typeGuards";
import { createAction } from "@reduxjs/toolkit";
import { UNKNOWN_ERROR_MESSAGE } from "./constant";
import { LOCAL_STORAGE_TOKEN } from "./constants";
import { jwtDecode } from "jwt-decode";

// Saga Effects. Log out action
export function* logOutSaga(data: { type: string }): any {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN);
    yield put(logOut());
}

export const LOG_OUT_ACTION = 'authAndProfile/logOutAction';
export const logOutAction = createAction(LOG_OUT_ACTION);