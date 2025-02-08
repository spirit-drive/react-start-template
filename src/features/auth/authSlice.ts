import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | null;
    profile: { name: string; role: string } | null;
    role: string | null;
    error: string | null;
    isLoading: boolean;
    isRegistered: boolean;
}

interface RegisterFormInputs {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const initialState: AuthState = {
    token: localStorage.getItem('token') || null,  // Токен из локального хранилища
    role: localStorage.getItem('role') || null,
    profile: null,
    error: null,
    isLoading: false,
    isRegistered: false,
};

interface LoginPayload {
    email: string;
    password: string;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        startRegistration: (state, action: PayloadAction<RegisterFormInputs>) => {
            state.isLoading = true;
            state.error = null;
            console.log('Payload received:', action.payload);
            state.isRegistered = false;
        },
        registrationSuccess: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            // state.profile = { name: action.payload, role: 'user' };
            localStorage.setItem('token', action.payload);
            state.isLoading = false;
            state.isRegistered = true;
        },
        registrationFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
            state.isRegistered = false;
        },
        startLogin: (state, action: PayloadAction<LoginPayload>) => {
            state.isLoading = true;
            state.error = null;
        },
        // loginSuccess: (state, action: PayloadAction<{ token: string; role: string; profile: { name: string; role: string } }>) => {
        //     state.token = action.payload.token;
        //     state.role = action.payload.role;
        //     state.profile = action.payload.profile;
        //     localStorage.setItem('token', action.payload.token);  // Сохранение токена в localStorage
        //     state.isLoading = false;
        // },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        logout: (state) => {
            state.token = null;
            state.profile = null;
            localStorage.removeItem('token');  // Удаление токена из localStorage
        },
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
            //state.profile = { name: 'Fake User', role: 'admin' }; // Фейковые данные профиля
            localStorage.setItem('token', action.payload); // Сохраняем токен в локальное хранилище
            state.isLoading = false;
        },
        setRole(state, action: PayloadAction<string>) {
            state.role = action.payload;
            localStorage.setItem('role', action.payload);
        },
    },
});

export const {
    startRegistration,
    registrationSuccess,
    registrationFailure,
    startLogin,
    // loginSuccess,
    loginFailure,
    logout,
    setToken,
    setRole,
} = authSlice.actions;

export default authSlice.reducer;