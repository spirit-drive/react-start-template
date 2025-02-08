import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface ProductState {
    isLoading: boolean;
    successMessage: string | null; // Успешное сообщение
    error: string | null; // Сообщение об ошибке
}

const initialState: ProductState = {
    isLoading: false,
    successMessage: null, // Изначально сообщение об успехе отсутствует
    error: null, // Изначально ошибки нет
};

// Thunk для создания товара
export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (productData: Record<string, any>, { rejectWithValue }) => {
        try {
            const response = await fetch('http://19429ba06ff2.vps.myjino.ru/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(productData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Ошибка при создании товара');
            }

            return 'Товар успешно сохранен';
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        clearProductMessage: (state) => {
            state.successMessage = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.pending, (state) => {
                state.isLoading = true;
                state.successMessage = null;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.successMessage = action.payload;
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { clearProductMessage } = productSlice.actions;
export default productSlice.reducer;