import { createSlice } from '@reduxjs/toolkit';

const userData = {
  id: "2",
  name: "admn",
  email: "admin@aa.aa",
  isAdmin: true,
}
interface User {
  id: string,
  name: string,
  email: string,
  isAdmin: boolean,
}
interface UserState {
  access_token?: string | null,
  userInfo: User | null,
  isAuthenticated: boolean,
}

const initialState: UserState = {
  access_token: localStorage.getItem('access_token') || null,
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
  isAuthenticated: Boolean(localStorage.getItem('isAuthenticated')) || false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: JSON.parse(localStorage.getItem('user'))?.login,
    about: JSON.parse(localStorage.getItem('user'))?.about,
  },
  reducers: {
    setInfo: () => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          login: 'test_profile',
          about:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        })
      );
    },
    clearInfo: () => {
      localStorage.removeItem('user');
    },
  },
});

 export const userActions = userSlice.actions;
 export const user = userSlice.reducer;
