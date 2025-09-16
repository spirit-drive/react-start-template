import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { app } from './app';
import { token } from './token';
import { profile } from './StoreProfile';
import { basket } from './basket';
import { authApi } from 'src/services/AuthService/AuthRtkService';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productApi } from 'src/services/ProductService/ProductService';
import { orderApi } from 'src/services/OrderService/OrderService';


export const rtkStore = configureStore({
  reducer: {
    app,
    basket,
    profile,
    token,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(productApi.middleware)
      .concat(orderApi.middleware)
});

setupListeners(rtkStore.dispatch)

export type RtkState = ReturnType<typeof rtkStore.getState>;
export type RtkDispatch = typeof rtkStore.dispatch;
export type ExtraParams = { };
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RtkState, ExtraParams, Action>;