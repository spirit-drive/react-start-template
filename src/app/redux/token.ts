import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

const tokenSlice = createSlice({
  name: 'token',
  initialState: localStorage.getItem('token'),
  reducers: {
    generate: () => Math.random().toString(16),
    clear: () => null,
  },
});
export const tokenActions = tokenSlice.actions;

export const tokenSelectors = {
  get: (state: AppState): AppState['token'] => {
    return state.token;
  },
};

export const token = tokenSlice.reducer;
