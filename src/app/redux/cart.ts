import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { products: localStorage.getItem('cart') ? (JSON.parse(localStorage.getItem('cart')) as []) : [] },
  reducers: {
    add: (state, { payload: productId }) => {
      const product = state.products.find((p) => p.productId == productId);
      if (product) {
        product.count++;
      } else {
        state.products.push({ productId: productId, count: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(state.products));
    },
    delete: (state, { payload: { productId, count } }) => {
      const product = state.products.find((p) => p.productId == productId);
      if (product && product.count - count > 0) {
        product.count = product.count - count;
      } else {
        state.products = state.products.filter((p) => p.productId != productId);
      }
      localStorage.setItem('cart', JSON.stringify(state.products));
    },
  },
});
export const cartActions = cartSlice.actions;

export const tokenSelectors = {
  get: (state: AppState): AppState['cart'] => {
    return state.cart;
  },
};

export const cart = cartSlice.reducer;
