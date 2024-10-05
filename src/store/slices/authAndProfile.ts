import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

type TAuthAndProfile = {
    appStatus: TAppStarted;
    auth: TAuth;
    profile: TProfile;
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
            }
        }
    }
)

export default authAndProfileSlice.reducer;

export const { appInitiated, saveToken, saveProfile, logOut } = authAndProfileSlice.actions;