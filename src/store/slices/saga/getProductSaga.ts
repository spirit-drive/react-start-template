import { put } from "redux-saga/effects";
import { isTErrorResponse, TServerError } from "../../../shared/fetchHelpers/typeGuards";
import { createAction } from "@reduxjs/toolkit";
import { UNKNOWN_ERROR_MESSAGE } from "./constant";
import { Product, Sorting } from "../../../entities/ViewProductList/model/types/types";
import { getProductsApi } from "../../../entities/ViewProductList/api/request";
import { addProductsToList, setError, setIsLoading } from "../productSlice";
import { RawProductDto, TProductGetRaw } from "../../../entities/ViewProductList/model/types/productTypes";

export type TGetProductSagaProps = {
    pageSize: number;
    pageNumber: number;
    sorting: Sorting;
}

// Saga Effects. get product
export function* getProductSaga(data: { type: string, payload: TGetProductSagaProps }): any {
    try {
        yield put(setError({ isError: false, errorMessage: "" }));
        yield put(setIsLoading(true));

        const response = yield getProductsApi(data.payload.pageSize,
            data.payload.pageNumber, data.payload.sorting);
        const product: Product[] = response.data.map((d: TProductGetRaw) => new RawProductDto(d))
        yield put(addProductsToList(product))

    } catch (error: unknown) {
        if (isTErrorResponse(error)) {
            let allErrors = "";
            error.response.data.errors.forEach((e: TServerError) => allErrors += e.message)

            yield put(setError({ isError: true, errorMessage: allErrors }))
        } else {
            yield put(setError({ isError: true, errorMessage: UNKNOWN_ERROR_MESSAGE }))
        }
    } finally {
        yield put(setIsLoading(false));
    }
}

export const PRODUCT_GET = 'product/getProduct';
export const productGet = createAction<TGetProductSagaProps>(PRODUCT_GET);