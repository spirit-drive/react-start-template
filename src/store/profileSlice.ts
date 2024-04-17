import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { getEmailLocalStorage, getUserNameLocalStorage } from '../helper/localStorage';

interface IInitialState {
  userName: string;
  userEmail: string;
}

const initialState: IInitialState = {
  userName: getUserNameLocalStorage() || '',
  userEmail: getEmailLocalStorage() || '',
};

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setName: (state: IInitialState, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setEmail: (state: IInitialState, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
  },
});

export const { setName, setEmail } = profileSlice.actions;

export default profileSlice.reducer;
