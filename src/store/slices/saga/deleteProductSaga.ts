import { call, put } from "redux-saga/effects";
import { isTErrorResponse, TServerError } from "../../../shared/fetchHelpers/typeGuards";
import { createAction } from "@reduxjs/toolkit";
import { UNKNOWN_ERROR_MESSAGE } from "./constant";
import { deleteProductApi } from "../../../entities/ViewProductList/api/request";
import { deleteProduct, setError } from "../productSlice";

// Saga Effects. Delete product
export function* deleteProductSaga(data: { type: string, payload: string }): any {
    try {
        console.log('deleteProductSaga ' + data.payload);
        
        yield call(deleteProductApi, data.payload);
        yield put(deleteProduct(data.payload));
    } catch (error: unknown) {
        if (isTErrorResponse(error)) {
            let allErrors = "";
            error.response.data.errors.forEach((e: TServerError) => allErrors += e.message);

            yield put(setError({ isError: true, errorMessage: allErrors }))
        } else {
            yield put(setError({ isError: true, errorMessage: UNKNOWN_ERROR_MESSAGE }))
        }
    }
}

export const PRODUCT_DELETE = 'product/productDeleteSaga';
export const productDelete = createAction<string>(PRODUCT_DELETE);