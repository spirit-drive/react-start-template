import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type Product = {
  id: string;
  name: string;
  photo?: string;
  desc?: string;
  createdAt: Date;
  updatedAt: Date;
  oldPrice?: number;
  price: number;
  category?: any;
};

interface IInitialState {
  products: Product[];
}

const token = localStorage.getItem('token');

//создать

export const createProduct = createAsyncThunk('product/createProduct', async (productItem: any) => {
  try {
    const response = await fetch('http://19429ba06ff2.vps.myjino.ru/api/products', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: productItem,
    });
  } catch (error) {
    console.error(error);
  }
});

//получить
export const getProductList = createAsyncThunk('product/getProductList', async () => {
  try {
    const response = await fetch('http://19429ba06ff2.vps.myjino.ru/api/products', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

const initialState: IInitialState = {
  products: [],
};

const productCatalogSlice = createSlice({
  name: 'productCatalogSlice',
  initialState,
  reducers: {
    addProduct: (state: IInitialState, action: PayloadAction<Product>) => {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      //in progress
    });
  },
});

export const { addProduct } = productCatalogSlice.actions;

export default productCatalogSlice.reducer;
