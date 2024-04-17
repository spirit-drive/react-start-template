import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { getProductBasketListLocalStorage } from '../helper/localStorage';
import { DisplayProductBasketProps } from '../types';

interface IInitialState {
  productBasketList: Array<DisplayProductBasketProps> | [];
}

const initialState: IInitialState = {
  productBasketList: getProductBasketListLocalStorage() || [],
};

const productBasketSlice = createSlice({
  name: 'productBasketSlice',
  initialState,
  reducers: {
    addToBasket: (state: IInitialState, action: PayloadAction<DisplayProductBasketProps>) => {
      return {
        ...state,
        productBasketList: [...state.productBasketList, action.payload],
      };
    },
    removeFromBasket: (state: IInitialState, action: PayloadAction<number>) => {
      return {
        ...state,
        productBasketList: state.productBasketList.filter((product) => product.id !== action.payload),
      };
    },
  },
});

export const { addToBasket, removeFromBasket } = productBasketSlice.actions;

export default productBasketSlice.reducer;
