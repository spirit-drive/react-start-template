import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { products: localStorage.getItem('cart') ? (JSON.parse(localStorage.getItem('cart')) as []) : [] },
  reducers: {
    add: (state, { payload: product }) => {
      const index = state.products.findIndex((p) => p?.product?.id == product.id);
      if (index >= 0) {
        state.products[index].count++;
      } else {
        state.products.push({ product: product, count: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.products));
    },
    delete: (state, { payload: { productId, count } }) => {
      const product = state.products.find((p) => p?.product?.id == productId);
      if (product && product.count - count > 0) {
        product.count = product.count - count;
      } else {
        state.products = state.products.filter((p) => p.product.id != productId);
      }
      localStorage.setItem('cart', JSON.stringify(state.products));
    },
    clean: (state) => {
      state.products = null;
      localStorage.removeItem('cart');
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
