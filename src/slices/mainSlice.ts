import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setSnackBar } from "./snackBarSlice";
import { UserTypes } from "src/types/UserTypes";

interface IInput {
    email: string,
    password: string | null,
};

export const fetchUser = createAsyncThunk(
    'main/fetchUser',
    async (body: IInput, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await fetch(`https://19429ba06ff2.vps.myjino.ru/api/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(body)
            })
            if (!response.ok) {
                const errors = await response.json();
                dispatch(setSnackBar({
                    open: true,
                    text: errors.errors[0].message,
                    severity: 'error'
                }));
                throw new Error(`${errors.errors[0].message}`);
            }
            const data = await response.json();
            dispatch(setToken(data.token));
            dispatch(setUser(body))
            return fulfillWithValue(data)

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const signIn = createAsyncThunk(
    'main/signIn',
    async (body: IInput, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await fetch(`https://19429ba06ff2.vps.myjino.ru/api/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(body)
            })
            if (!response.ok) {
                const errors = await response.json();
                dispatch(setSnackBar({
                    open: true,
                    text: errors.errors[0].message,
                    severity: 'error'
                }));
                throw new Error(`${errors.errors[0].message}`);
            }
            const data = await response.json();
            localStorage.setItem("myToken", data.token)
            dispatch(setToken(data.token));
            dispatch(setUser({...data.profile}))
            return fulfillWithValue(data)

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export interface mainTypes {
    token: string
    isInitial: boolean
    user: UserTypes | null
}

const initialState: mainTypes = {
    token: "",
    isInitial: false,
    user: null,
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setInitial: (state, action) => {
            state.isInitial = action.payload
        },
    },
        extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            localStorage.setItem("myToken", action.payload.token)
          })
    }
})

const { actions, reducer } = mainSlice;
export const { setToken, setUser, setInitial } = mainSlice.actions
export default reducer;
