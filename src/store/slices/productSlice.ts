import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../homeworks/ts1/3_write";

export type TProductList = {
    productList: Product[];
}

const initialState: TProductList = {
    productList: []
}

const productSlice = createSlice(
    {
        name: 'product',
        initialState,
        reducers: {
            addToShop(state, action: PayloadAction<Product>) {
                state.productList.push(action.payload);
            },
        }
    }
)

export default productSlice.reducer;

export const { addToShop } = productSlice.actions;