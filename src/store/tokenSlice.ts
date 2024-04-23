import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IInitalState {
  token: string;
}

const initialState: IInitalState = {
  token: localStorage.getItem('token') || '',
};

const tokenSlice = createSlice({
  name: 'tokenSlice',
  initialState,
  reducers: {
    setToken: (state: IInitalState, action: PayloadAction<string>) => {
      const token = action.payload;
      state.token = token;
      localStorage.setItem('token', token);
    },
    removeToken: (state: IInitalState) => {
        state.token = '';
        localStorage.removeItem('token');
    },
  },
});

export const { setToken, removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;
