import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from '../../features/auth/authSlice';
import profileReducer from '../../pages/slice/profileSlice';
import productsReducer from '../../pages/slice/productsSlice';
import categoriesReducer from '../../pages/slice/categoriesSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
// import { api } from '../../shared/api/baseApi';
import rootSaga from "src/sagas/rootSaga";


interface StoreProviderProps {
    children: React.ReactNode;
}

// Создаём sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        products: productsReducer,
        categories: categoriesReducer,
        // cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware), // Подключаем sagaMiddleware
    devTools: process.env.NODE_ENV !== 'production', // Для отладки Redux в devTools
});

// Подключаем саги
sagaMiddleware.run(rootSaga);

setupListeners(store.dispatch); // Устанавливаем слушатели для кэширования запросов

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
