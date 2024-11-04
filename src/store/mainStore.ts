import { configureStore } from "@reduxjs/toolkit";
import authAndProfileReducer from "./slices/authAndProfile";
import productInCartSlice from "./slices/productInCartSlice";
import productSlice from "./slices/productSlice";
import createSagaMiddleware from "redux-saga";
import { takeEvery, takeLatest } from "redux-saga/effects";
import { doProfileRegisterSaga, PROFILE_REGISTER } from "./slices/saga/authAndProfileSaga";
import { doProfileUpdateSaga, PROFILE_UPDATE } from "./slices/saga/profileUpdateSaga";
import { getProductSaga, PRODUCT_GET } from "./slices/saga/getProductSaga";
import { PRODUCT_UPDATE, updateProductSaga } from "./slices/saga/updateProductSaga";
import { PRODUCT_DELETE, deleteProductSaga } from "./slices/saga/deleteProductSaga";
import { PRODUCT_ADD, addProductSaga } from "./slices/saga/addProductSaga";
import { APP_INITIATED, appInitiateSaga } from "./slices/saga/appInitiateSaga";
import { LOG_OUT_ACTION, logOutSaga } from "./slices/saga/logOutSaga";
import { PRODUCT_REFRESH, refreshProductListSaga } from "./slices/saga/refreshProductListSaga";

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
    yield takeLatest(APP_INITIATED, appInitiateSaga);
    yield takeLatest(LOG_OUT_ACTION, logOutSaga);
    yield takeLatest(PROFILE_REGISTER, doProfileRegisterSaga);
    yield takeLatest(PROFILE_UPDATE, doProfileUpdateSaga);
    yield takeLatest(PRODUCT_GET, getProductSaga);
    yield takeLatest(PRODUCT_UPDATE, updateProductSaga);
    yield takeLatest(PRODUCT_DELETE, deleteProductSaga);
    yield takeLatest(PRODUCT_ADD, addProductSaga);
    yield takeLatest(PRODUCT_REFRESH, refreshProductListSaga);
}

const store = configureStore({
    reducer: {
        authAndProfile: authAndProfileReducer,
        productSlice: productSlice,
        productInCartSlice: productInCartSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(sagas);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

