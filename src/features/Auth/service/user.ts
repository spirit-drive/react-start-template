import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Credential, sign_up, sign_in } from 'src/shared/api/user';
import { LOCAL_STORAGE_TOKEN_KEY, LOCAL_STORAGE_USER_KEY } from '../../../app/constants/localStorage';
import { resetCatalog } from 'src/app/store/product';
import { productApi } from 'src/shared/api/rtk/productApi';
import { AppState } from 'src/app/store/store';

export const signUp = createAsyncThunk('user/signUp', async (credential: Credential, { rejectWithValue, dispatch }) => {
  try {
    await sign_up(credential);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const signIn = createAsyncThunk('user/signIn', async (credential: Credential, { rejectWithValue, dispatch }) => {
  try {
    await sign_in(credential).then((data: AuthResponse) => {
      dispatch(userActions.setInfo(data));
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, data.token);
      dispatch(resetCatalog());
      dispatch(productApi.util.resetApiState());
    });
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('user/logout', (credential: Credential, { dispatch }) => {
  dispatch(userActions.clear());
  dispatch(resetCatalog());
});

type UserStateType = {
  status: 'loading' | 'resolve' | 'rejected';
  error: string;
  token?: string | null;
  user: User | null;
  isAuthenticated: boolean;
};

interface AuthResponse {
  token: string;
  profile: ProfileResponseAuth;
}

interface ProfileResponseAuth {
  id: string;
  signUpDate: string;
  email: string;
  commandId: string;
  password: string;
  __v: number;
}

interface User {
  id: string;
  name?: string;
  email: string;
  signUpDate: string;
  commandId?: string;
}

const getInitialState = (): UserStateType => {
  const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
  if (user) {
    return JSON.parse(user) as UserStateType;
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
  } as UserStateType;
};

const userSlice = createSlice({
  name: 'user',
  initialState: getInitialState,
  reducers: {
    setInfo: (state, action: PayloadAction<AuthResponse>) => {
      const { token, profile } = action.payload;
      state.user = {
        id: profile.id,
        email: profile.email,
        signUpDate: profile.signUpDate,
        commandId: profile.commandId,
      };
      state.isAuthenticated = token ? true : false;
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(state.user));
    },
    clearError: (state) => {
      state.error = undefined;
    },
    clear: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
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
      state.error = action.error.message;
    });
    builder.addCase(signIn.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.status = 'resolve';
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error.message;
    });
  },
});

export const getIsAuth = (state: AppState) => state.user.isAuthenticated;
export const getProfile = (state: AppState) => state.user.user;
export const userActions = userSlice.actions;
export const user = userSlice.reducer;
