import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProfile } from "../../shared/profileTypes/profileTypes";
import { jwtDecode } from "jwt-decode";
import { date } from "zod";



type TAppStarted = {
    isAppInitiated: boolean;
}

type TAuth = {
    token: string;
}

type TLoad = {
    isLoading: boolean;
}

type TUpdate = {
    isUpdating: boolean;
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
    updating: TUpdate;
    error: TError;
};

const initialState: TAuthAndProfile = {
    appStatus: { isAppInitiated: false },
    auth: { token: "" },
    profile: {
        id: "",
        name: "",
        email: "",
        signUpDate: undefined,
        commandId: "",
    },
    loading: { isLoading: false },
    updating: { isUpdating: false },
    error: { isError: false, errorMessage: "" }
}

const authAndProfileSlice = createSlice(
    {
        name: 'authAndProfile',
        initialState,
        reducers: {
            setAppInitiated(state) {
                state.appStatus.isAppInitiated = true;
            },
            saveToken(state, action: PayloadAction<string>) {
                state.auth.token = action.payload;
            },
            saveProfile(state, action: PayloadAction<TProfile>) {
                state.profile = { ...action.payload }
            },
            logOut(state) {
                state.auth = { token: "" };
                state.profile = {
                    id: "",
                    name: "",
                    email: "",
                    signUpDate: undefined,
                    commandId: "",
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
export const { setAppInitiated, saveToken, saveProfile, logOut, setIsLoading, setError } = authAndProfileSlice.actions;

