import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Тип данных профиля
interface ProfileData {
    id: string;
    email: string;
    signUpDate: string;
}

// Начальное состояние профиля
interface ProfileState {
    data: ProfileData | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: ProfileState = {
    data: null,
    isLoading: false,
    error: null,
};

// Слайс профиля
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        // Действие для установки данных профиля
        setProfile: (state, action: PayloadAction<ProfileData>) => {
            state.data = action.payload;
            state.isLoading = false;
            state.error = null;
            console.log('Данные профиля загружены:', action.payload);
        },
        // Действие для очистки профиля
        clearProfile: (state) => {
            state.data = null;
            state.isLoading = false;
            state.error = null;
        },
        // Действие для старта загрузки
        startLoading: (state) => {
            state.isLoading = true;
            state.error = null;
            console.log('startLoading profileSlice');
        },
        // Действие для обработки ошибок
        loadingFailed: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { setProfile, clearProfile, startLoading, loadingFailed } = profileSlice.actions;

export default profileSlice.reducer;