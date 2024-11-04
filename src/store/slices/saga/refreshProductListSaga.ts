import { put, select } from "redux-saga/effects";
import { isTErrorResponse, TServerError } from "../../../shared/fetchHelpers/typeGuards";
import { createAction } from "@reduxjs/toolkit";
import { UNKNOWN_ERROR_MESSAGE } from "./constant";
import { Product, Sorting } from "../../../entities/ViewProductList/model/types/types";
import { getProductsApi } from "../../../entities/ViewProductList/api/request";
import productSlice, { addProductsToList, setError, setIsLoading } from "../productSlice";
import { RawProductDto, TProductGetRaw } from "../../../entities/ViewProductList/model/types/productTypes";
import * as selectors from '../productSlice';
import { MAX_ON_PAGE } from "./constants";

// Saga Effects. get product
export function* refreshProductListSaga(): any {
    try {
        yield put(setError({ isError: false, errorMessage: "" }));
        yield put(setIsLoading(true));

        const response = yield getProductsApi(MAX_ON_PAGE, 1, { type: 'ASC', field: 'id' });
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

export const PRODUCT_REFRESH = 'product/refreshProduct';
export const productRefresh = createAction(PRODUCT_REFRESH);