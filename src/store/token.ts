import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RtkState } from './store'

const tokenSlice = createSlice({
  name: 'token',
  initialState: localStorage.getItem('token'),
  reducers: {
    clear: () => null,
    generate: () => Math.random().toString(16),
    set: (_, action: PayloadAction<string>) => action.payload
  },
});
export const tokenActions = tokenSlice.actions;

export const tokenSelectors = {
  get: (state: RtkState): RtkState['token'] => {
    return state.token;
  },
  authenticated: (state: RtkState): boolean => {
    return state.token !== null;
  }
};

const clearWithSaving = (): AppThunk => (dispatch, getState) => {
  dispatch(tokenActions.clear());
  localStorage.removeItem('token');
};

const generateWithSaving = (): AppThunk => (dispatch, getState) => {
  console.log('token generateWithSaving');

  dispatch(tokenActions.generate());
  const state = getState();

  localStorage.setItem('token', state.token);
};

const setToken = (token: string): AppThunk => (dispatch, getState) => {
  dispatch(tokenActions.set(token));
  localStorage.setItem('token', token);
};

export const tokenThunks = {
  clearWithSaving,
  generateWithSaving,
  setToken,
};

export const token = tokenSlice.reducer;