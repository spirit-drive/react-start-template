import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './tokenSlice';

export const store = configureStore({
  reducer: {
    tokenSlice,
  },
});

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
