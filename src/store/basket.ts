import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "src/models/product/product";
import { RtkState } from "./store";
import { tokenActions } from "./token";

const basketSlice = createSlice({
    name: 'basket',
    initialState: <Product[]>null,
    reducers: {
        add: (state, action: PayloadAction<Product>) => {
            if (state === null) {
                return [action.payload];
            }

            if (state.findIndex(x => x.id === action.payload.id) < 0)
            {
                state.push(action.payload);
            }
        },
        remove: (state, action: PayloadAction<Product["id"]>) => {
            const index = state.findIndex(x => x.id === action.payload);
            if( index >= 0) {
                state.splice(index, 1)
            }
        },
        clear: () => null
    },
    extraReducers: (builder) => {
        builder.addCase(tokenActions.clear, (state, action) => {
            return null;
        });
    },
});
export const basketActions = basketSlice.actions;

export const basketSelectors = {
    get: (state: RtkState): RtkState['basket'] => {
        return state.basket;
    },
};
export const basket = basketSlice.reducer;