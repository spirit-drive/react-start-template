import { configureStore } from '@reduxjs/toolkit';
import { rtkApi } from 'src/shared/api/rtk/rtkApi';
import { appReducer } from './app';
import { token } from './token';
import { productReducer } from './product';
import { user } from '../../features/Auth/service/user';
import { cart } from './cart';

export const store = configureStore({
  reducer: {
    app: appReducer,
    token,
    user,
    cart,
    product: productReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
});

export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
