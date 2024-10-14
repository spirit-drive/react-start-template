import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Credential, signup } from '../../shared/api/user';

export const register = createAsyncThunk(
  'user/register',
  async (credential: Credential, { rejectWithValue, dispatch }) => {
    console.log('try by thunk', credential)
    try {
      const data = await signup(credential);
      dispatch(userActions.setInfo(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

type initialStateType = {
  status: 'loading' | 'resolve' | 'rejected';
  error: string;
  user: User;
};

interface User {
  id: string,
  name: string,
  email: string,
  isAdmin: boolean,
  about: string;
  signUpDate: string;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: undefined,
      id: undefined,
      about: undefined,
      email: undefined,
      signUpDate: undefined,
    },
    error: undefined,
    status: undefined,
  } as initialStateType,
  reducers: {
    setInfo: (state, action) => {
      const user = action.payload.profile;
      state.user.email = user.email;
      state.user.signUpDate = user.signUpDate;

      console.log(state.user.email);
      console.log(state.user.about);
      console.log(state.user.signUpDate);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.status = 'resolve';
    });
    builder.addCase(register.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload as string;
    });
  },
});

 export const userActions = userSlice.actions;
 export const user = userSlice.reducer;
