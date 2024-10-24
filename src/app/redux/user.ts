import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import client from 'src/helper/connections/client';
import { SIGN_IN, SIGN_UP, UPDATE_PROFILE } from 'src/helper/connections/profileConnections';
import { getServerErrorCode } from 'src/utils/validation';
import { ApolloError } from '@apollo/client';

export const signUp = createAsyncThunk(
  'user/signUp',
  async (credentials: { email: string; password: string; commandId: string }) => {
    const response = await client.mutate({
      mutation: SIGN_UP,
      variables: credentials,
    });
    return response.data;
  }
);

export const signIn = createAsyncThunk(
  'user/signIn',
  async (credentials: { email: string; password: string; commandId: string }) => {
    const response = await client.mutate({
      mutation: SIGN_IN,
      variables: credentials,
    });
    return response.data;
  }
);

type initialStateType = {
  status: 'loading' | 'resolve' | 'rejected';
  error: string;
  user: User;
};

interface User {
  id: string;
  name: string;
  email: string;
  signUpDate: string;
}

const getInitialState = (): initialStateType => {
  const user = localStorage.getItem('user');
  console.log('getInitialState', user);
  if (user) {
    let u = JSON.parse(user);
    console.log('getInitialState', u);
    return JSON.parse(user) as initialStateType;
  }
  return {
    user: {
      name: '',
      id: '',
      email: '',
      signUpDate: '',
    },
    error: undefined,
    status: undefined,
  } as initialStateType;
};

const userSlice = createSlice({
  name: 'user',
  initialState: getInitialState,
  reducers: {
    setInfo: (state, action) => {
      const user = action.payload.profile;
      console.log('setInfo', user);
      state.user = user;
      // state.user.email = user.profile.email;
      // state.user.signUpDate = user.profile.signUpDate;
      // state.user.id = user.profile.id;
      //  state.user.id = user.profile.name;
      console.log('set info id', state.user.id);
      console.log('set info email', state.user.email);
      console.log('set info name', state.user.name);
      console.log('set info signUpDate', state.user.signUpDate);
      localStorage.setItem('user', JSON.stringify(user));
    },
    clearError: (state) => {
      console.log('clearError', state);
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.status = 'resolve';
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error.message ?? 'Error.' + getServerErrorCode(action.error as ApolloError);
    });
    builder.addCase(signIn.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.status = 'resolve';
      userSlice.caseReducers.setInfo(state, action);
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error.message ?? 'Error.' + getServerErrorCode(action.error as ApolloError);
    });
  },
});

export const userActions = userSlice.actions;
export const user = userSlice.reducer;
