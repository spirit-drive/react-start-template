import { configureStore } from "@reduxjs/toolkit";
import authAndProfileReducer from "./slices/authAndProfile";
import productInCartSlice from "./slices/productInCartSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
    reducer: {
        authAndProfile: authAndProfileReducer,
        productSlice: productSlice,
        productInCartSlice: productInCartSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;