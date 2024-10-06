import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";
import { postRegisterApi } from "../../entities/Register/api/request";
import { isTRegisterProfile } from "../../shared/fetchHelpers/registerTypeGuards";
import { isTErrorResponse, TServerError } from "../../shared/fetchHelpers/typeGuards";
import { put } from 'redux-saga/effects';

type TAppStarted = {
    isAppInitiated: boolean;
}

type TAuth = {
    token: string;
}

// Профиль
type TProfile = {
    userName: string;
    address: string;
    phone: string;
    role: string;
}

type TLoad = {
    isLoading: boolean;
}

type TError = {
    isError: boolean;
    errorMessage: string;
}

type TAuthAndProfile = {
    appStatus: TAppStarted;
    auth: TAuth;
    profile: TProfile;
    loading: TLoad;
    error: TError;
};

const initialState: TAuthAndProfile = {
    appStatus: { isAppInitiated: false },
    auth: { token: "" },
    profile: {
        userName: "",
        address: "",
        phone: "",
        role: "",
    },
    loading: { isLoading: false },
    error: { isError: false, errorMessage: "" }
}

const authAndProfileSlice = createSlice(
    {
        name: 'authAndProfile',
        initialState,
        reducers: {
            appInitiated(state) {
                state.appStatus.isAppInitiated = true;
            },
            saveToken(state, action: PayloadAction<string>) {
                state.auth.token = action.payload
            },
            saveProfile(state, action: PayloadAction<TProfile>) {
                state.profile = { ...action.payload }
            },
            logOut(state) {
                state.auth = { token: "" };
                state.profile = {
                    userName: "",
                    address: "",
                    phone: "",
                    role: "",
                }
            },
            setIsLoading(state, action: PayloadAction<boolean>) {
                state.loading.isLoading = action.payload;
            },
            setError(state, action: PayloadAction<TError>) {
                state.error.isError = action.payload.isError;
                state.error.errorMessage = action.payload.errorMessage;
            }
        }
    }
)

export default authAndProfileSlice.reducer;

export const { appInitiated, saveToken, saveProfile, logOut, setIsLoading, setError } = authAndProfileSlice.actions;


// Saga Effects
export function* doProfileRegisterSaga(data: { type: string, payload: { email: string, password: string } }): any {
    const unknownError = 'Не известная ошибка';
    try {
        yield put(setError({ isError: false, errorMessage: "" }));
        yield put(setIsLoading(true));

        const response = yield postRegisterApi(data.payload.email, data.payload.password);

        if (isTRegisterProfile(response)) {
            
            const newProfile: TProfile = {
                userName: response.profile.email,
                address: "",
                phone: "",
                role: "",
            }

            yield put(saveProfile(newProfile));
            yield put(saveToken(response.token));
        } else {
            throw (unknownError);
        }

    } catch (error: unknown) {
        if (isTErrorResponse(error)) {
            let allErrors = "";
            error.response.data.errors.forEach((e: TServerError) => allErrors += e.message)

            yield put(setError({ isError: true, errorMessage: allErrors }))
        } else {
            yield put(setError({ isError: true, errorMessage: unknownError }))
        }
    } finally {
        yield put(setIsLoading(false));
    }

}

export const PROFILE_REGISTER = 'authAndProfile/doRegister';
export const profileRegister = createAction<{ email: string, password: string }>(PROFILE_REGISTER);