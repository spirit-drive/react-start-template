import { createSlice } from '@reduxjs/toolkit';
import { rand } from '../helper/utils';

interface IInitalState {
  token: string;
}

const initialState: IInitalState = {
  token: '',
};

const tokenSlice = createSlice({
  name: 'tokenSlice',
  initialState,
  reducers: {
    setToken: (state: IInitalState) => {
      const randomToken = rand() + rand();
      state.token = randomToken;
      localStorage.setItem('token', randomToken);
    },
    removeToken: (state: IInitalState) => {
        state.token = '';
        localStorage.removeItem('token');
    },
  },
});

export const { setToken, removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;
