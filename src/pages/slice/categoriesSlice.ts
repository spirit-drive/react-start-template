import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {AppDispatch, RootState} from "src/app/providers/StoreProvider";

interface Category {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

interface CategoriesState {
    categories: Category[];
    isLoading: boolean;
    error: string | null;
    successMessage: string | null;
}

const initialState: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null,
    successMessage: null,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        fetchCategoriesStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchCategoriesSuccess: (state, action: PayloadAction<Category[]>) => {
            state.isLoading = false;
            state.categories = action.payload;
        },
        fetchCategoriesFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        createCategoryStart: (state) => {
            state.isLoading = true;
            state.error = null;
            state.successMessage = null;
        },
        createCategorySuccess: (state) => {
            state.isLoading = false;
            state.successMessage = 'Категория успешно создана';
        },
        createCategoryFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchCategoriesStart,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
    createCategoryStart,
    createCategorySuccess,
    createCategoryFailure,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;

// Асинхронные действия
export const fetchCategories = () => async (dispatch: AppDispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const response = await axios.get('http://19429ba06ff2.vps.myjino.ru/api/categories');
        dispatch(fetchCategoriesSuccess(response.data.data));
    } catch (error) {
        dispatch(fetchCategoriesFailure('Не удалось загрузить категории'));
    }
};

export const createCategory = (category: { name: string }) => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(createCategoryStart());
    try {
        const token = getState().auth.token; // Получаем токен из authSlice
        // const response = await axios.post(
        //     'http://19429ba06ff2.vps.myjino.ru/api/categories',
        //     category,
        //     {
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //         },
        //     }
        // );
        dispatch(createCategorySuccess());
        dispatch(fetchCategories()); // Обновить список категорий
    } catch (error) {
        dispatch(createCategoryFailure('Не удалось создать категорию'));
    }
};