import { call, put } from "redux-saga/effects";
import { isTErrorResponse, TServerError } from "../../../shared/fetchHelpers/typeGuards";
import { createAction } from "@reduxjs/toolkit";
import { UNKNOWN_ERROR_MESSAGE } from "./constant";
import { Category, Product, TAddProductFormParams, TAddProductParams, TUpdateProductParams } from "../../../entities/ViewProductList/model/types/types";
import { addPhotoApi, addProductApi, putProductApi } from "../../../entities/ViewProductList/api/request";
import { setError, cleanProductList } from "../productSlice";
import { getProductSaga, productGet } from "./getProductSaga";
import { refreshProductListSaga } from "./refreshProductListSaga";

// Saga Effects. Add product
export function* addProductSaga(data: { type: string, payload: TAddProductFormParams }): any {
    try {

        // Загрузка фотографии на сервер и получение ссылки на фото на сервере
        const uploadPhoto = yield addPhotoApi(data.payload.productImage);

        const { productImage, price, ...others } = data.payload;
        const addProduct: TAddProductParams = {
            ...others,
            price: Number(price),
            photo: uploadPhoto.url,
        }

        yield addProductApi(addProduct);

        yield call(refreshProductListSaga);

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

export const PRODUCT_ADD = 'product/addProduct';
export const productAdd = createAction<TAddProductFormParams>(PRODUCT_ADD);