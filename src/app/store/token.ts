import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { LOCAL_STORAGE_TOKEN_KEY } from '../constants/localStorage';

const tokenSlice = createSlice({
  name: LOCAL_STORAGE_TOKEN_KEY,
  initialState: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY),
  reducers: {
    generate: (_, action) => action.payload,
    set: (state) => {
      state;
    },
    clear: () => null,
  },
});
export const tokenActions = tokenSlice.actions;

export const tokenSelectors = {
  get: (state: AppState): AppState['token'] => state.token,
};

export const token = tokenSlice.reducer;
