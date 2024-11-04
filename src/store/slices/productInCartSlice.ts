import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../entities/ViewProductList/model/types/types";

export type TProductInCartWithCount = Product & { count: number }

export type TProductListInCart = {
    productList: TProductInCartWithCount[];
    filterById: string;
}

const initialState: TProductListInCart = {
    productList: [],
    filterById: "",
}

const productInCartSlice = createSlice(
    {
        name: 'productInCart',
        initialState,
        reducers: {
            addToCart(state, action: PayloadAction<TProductInCartWithCount>) {
                let found = false;
                state.productList.forEach(p => {
                    if (p.id == action.payload.id) {
                        found = true;
                        p.count = action.payload.count;
                    }
                })

                if (found == false) {
                    state.productList.unshift(action.payload);
                }
            },
            dellFromCart(state, action: PayloadAction<string>) {
                state.productList = state.productList.filter(p => p.id != action.payload);
            },
            cleanCart(state){
                state.productList = [];
            },
        }
    }
)

export default productInCartSlice.reducer;

export const { addToCart, dellFromCart, cleanCart } = productInCartSlice.actions;

export const getCountInCartById = (productListinCart: TProductInCartWithCount[], id: string) => {
    const found = productListinCart.find(p => p.id === id);
    return found ? found.count : 0;
}