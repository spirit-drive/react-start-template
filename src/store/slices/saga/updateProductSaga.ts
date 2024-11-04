import { put } from "redux-saga/effects";
import { isTErrorResponse, TServerError } from "../../../shared/fetchHelpers/typeGuards";
import { createAction } from "@reduxjs/toolkit";
import { UNKNOWN_ERROR_MESSAGE } from "./constant";
import { Category, Product, TUpdateProductParams } from "../../../entities/ViewProductList/model/types/types";
import { putProductApi } from "../../../entities/ViewProductList/api/request";
import { setError, updateProductList } from "../productSlice";

// Saga Effects. Update product
export function* updateProductSaga(data: { type: string, payload: Product }): any {
    try {
        const updateProduct: TUpdateProductParams = {
            id: data.payload.id,
            name: data.payload.name,
            createdAt: data.payload.createdAt,
            updatedAt: data.payload.updatedAt,
            price: data.payload.price,
            categoryId: data.payload.category.id,
            commandId: data.payload.commandId,
            photo: data.payload.photo,
            desc: data.payload.desc,
            oldPrice: data.payload.oldPrice,
        }

        yield putProductApi(updateProduct);
        yield put(updateProductList(data.payload));
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

export const PRODUCT_UPDATE = 'product/updateProduct';
export const productUpdate = createAction<Product>(PRODUCT_UPDATE);