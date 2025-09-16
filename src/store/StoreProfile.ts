import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RtkState } from './store'
import { Profile } from 'src/models/profile';
import { tokenActions } from './token';

const profileSlice = createSlice({
  name: 'profile',
  initialState: <Profile | null>null,
  reducers: {
    set: (_, action: PayloadAction<Profile | null>) => action.payload,
  },
extraReducers: (builder) => {
    builder.addCase(tokenActions.clear, (state, action) => {
      return null;
    });
  },
});
export const profileActions = profileSlice.actions;

export const tokenSelectors = {
  get: (state: RtkState): RtkState['profile'] => {
    console.log('profileSelectors get');

    return state.profile;
  },
};
export const profile = profileSlice.reducer;