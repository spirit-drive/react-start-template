import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './tokenSlice';
import profileSlice from './profileSlice';
import productBasketSlice from './productBasketSlice';
import productCatalogSlice from './productCatalogSlice';

export const store = configureStore({
  reducer: {
    tokenSlice,
    profileSlice,
    productBasketSlice,
    productCatalogSlice,
  },
});

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
