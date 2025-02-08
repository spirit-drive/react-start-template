import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Интерфейсы для состояния
interface Product {
    id: string;
    name: string;
    price: number;
    desc: string;
    photo: string;
    category: {
        name: string;
    };
}

interface ProductState {
    products: Product[];
    totalPages: number;
    currentPage: number;
    isLoading: boolean;
    error: string | null;
}

// Начальное состояние
const initialState: ProductState = {
    products: [],
    totalPages: 0,
    currentPage: 1,
    isLoading: false,
    error: null
};

// Создание слайса
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        startProductsLoading(state) {
            state.isLoading = true;
            state.error = null;
        },
        setProducts(state, action: PayloadAction<{ products: Product[]; totalPages: number; currentPage: number }>) {
            state.isLoading = false;
            state.products = action.payload.products;
            state.totalPages = action.payload.totalPages;
            state.currentPage = action.payload.currentPage;
        },
        loadingFailed(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { startProductsLoading, setProducts, loadingFailed } = productSlice.actions;
export default productSlice.reducer;