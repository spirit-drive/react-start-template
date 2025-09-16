import { createSlice } from '@reduxjs/toolkit'
import { RtkState } from './store'

const appSlice = createSlice({
  name: 'app',
  initialState: false,
  reducers: {
    set: () => true,
  },

});
export const appActions = appSlice.actions;

export const appSelectors = {
  get: (state: RtkState): RtkState['app'] => {
    console.log('appSelectors get');

    return state.app;
  },
};
export const app = appSlice.reducer;