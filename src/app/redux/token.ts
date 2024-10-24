import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

const tokenSlice = createSlice({
  name: 'token',
  initialState: localStorage.getItem('token'),
  reducers: {
    generate: (_, action) => action.payload,
    clear: () => null,
  },
});
export const tokenActions = tokenSlice.actions;

export const tokenSelectors = {
  get: (state: AppState): AppState['token'] =>  state.token ,
};

export const token = tokenSlice.reducer;
