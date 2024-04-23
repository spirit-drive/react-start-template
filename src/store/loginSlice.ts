import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
    isLogin: string,
}

const initialState: IInitialState = {
  isLogin: localStorage.getItem('login') || '',
};

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        login: (state: IInitialState) => {
            state.isLogin = 'login';
        },
        logout: (state: IInitialState) => {
            state.isLogin = '';
        }
    }
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;