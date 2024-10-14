import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { sagas } from './sagas';
import { token } from './token';
import { cart } from './cart';
import { user } from './user';
import { program } from './program';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    token,
    cart,
    user,
    program,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;