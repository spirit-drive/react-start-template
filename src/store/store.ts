import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './tokenSlice';
import profileSlice from './profileSlice';
import productBasketSlice from './productBasketSlice';

export const store = configureStore({
  reducer: {
    tokenSlice,
    profileSlice,
    productBasketSlice,
  },
});

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
