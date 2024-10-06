import { configureStore } from "@reduxjs/toolkit";
import authAndProfileReducer, { doProfileRegisterSaga, PROFILE_REGISTER } from "./slices/authAndProfile";
import productInCartSlice from "./slices/productInCartSlice";
import productSlice from "./slices/productSlice";
import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
    yield takeEvery(PROFILE_REGISTER, doProfileRegisterSaga );
}

const store = configureStore({
    reducer: {
        authAndProfile: authAndProfileReducer,
        productSlice: productSlice,
        productInCartSlice: productInCartSlice,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
})

sagaMiddleware.run(sagas);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

