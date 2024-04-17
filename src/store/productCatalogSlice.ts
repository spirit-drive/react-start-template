import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { DisplayProductProps } from '../types';

interface IInitialState {
  products: DisplayProductProps[];
}

const initialState: IInitialState = {
  products: [
    {
      key: 1,
      id: 1123,
      coast: 500,
      category: 'computer',
      img: 'http://placehold.it/50x50',
      title: 'MacBook',
      description: 'amazing computer',
    },
    {
      key: 2123,
      id: Date.now(),
      coast: 2,
      category: 'computer',
      img: 'http://placehold.it/50x50',
      title: 'HP',
      description: 'great computer',
    },
    {
      key: 3,
      id: Date.now(),
      coast: 3243,
      category: 'computer',
      img: 'http://placehold.it/50x50',
      title: 'ACER',
      description: 'amazing computer too',
    },
  ],
};

const productCatalogSlice = createSlice({
  name: 'productCatalogSlice',
  initialState,
  reducers: {
    addProduct: (state: IInitialState, action: PayloadAction<DisplayProductProps>) => {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    },
  },
});

export const { addProduct } = productCatalogSlice.actions;

export default productCatalogSlice.reducer;
