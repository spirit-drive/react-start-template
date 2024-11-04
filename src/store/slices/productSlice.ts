import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, Sorting, TUpdateProductParams } from "../../entities/ViewProductList/model/types/types";
import { MAX_ON_PAGE } from "./saga/constants";

type TError = {
    isError: boolean;
    errorMessage: string;
}

type TLoad = {
    isLoading: boolean;
}

type TUpdate = {
    isUpdating: boolean;
}

type TPagination = {
    maxOnPage: number;
    sort: Sorting;
    currentPage: number;
}

export type TProductList = {
    productList: Product[];
    pagination: TPagination;
    loading: TLoad;
    updating: TUpdate;
    error: TError;
}

const initialState: TProductList = {
    productList: [],
    pagination: {
        maxOnPage: MAX_ON_PAGE,
        sort: { type: 'ASC', field: 'id' },
        currentPage: 1,
    },
    loading: { isLoading: false },
    updating: { isUpdating: false },
    error: { isError: false, errorMessage: "" }
}

const productSlice = createSlice(
    {
        name: 'product',
        initialState,
        reducers: {
            addToTopOfProductList(state, action: PayloadAction<Product>) {
                state.productList.unshift(action.payload);
            },
            addProductsToList(state, action: PayloadAction<Product[]>) {
                state.productList = action.payload;
            },
            cleanProductList(state) {
                state.productList = [];
            },
            updateProductList(state, action: PayloadAction<Product>) {
                const foundIndex = state.productList.findIndex(p => p.id == action.payload.id);
                if (foundIndex != -1) {
                    state.productList[foundIndex] = action.payload;
                };
            },
            deleteProduct(state, action: PayloadAction<string>) {
                state.productList = state.productList.filter(p => p.id != action.payload);
            },
            setCurrentPage(state, action: PayloadAction<number>) {
                state.pagination.currentPage = action.payload;
            },
            setIsLoading(state, action: PayloadAction<boolean>) {
                state.loading.isLoading = action.payload;
            },
            setError(state, action: PayloadAction<TError>) {
                state.error.isError = action.payload.isError;
                state.error.errorMessage = action.payload.errorMessage;
            }
        }
    }
)

export default productSlice.reducer;

export const { addToTopOfProductList, addProductsToList, cleanProductList, deleteProduct,
    updateProductList, setCurrentPage, setIsLoading, setError } = productSlice.actions;

export const paginationSelector = (state: TProductList) => state.pagination;