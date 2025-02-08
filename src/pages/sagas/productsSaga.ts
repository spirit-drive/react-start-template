import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { setProducts, startProductsLoading, loadingFailed } from '../slice/productsSlice';

// Интерфейс для продукта
interface Product {
    id: string; // Учитываем, что id в API приходит как строка
    name: string;
    photo: string;
    desc: string;
    createdAt: string;
    oldPrice: number;
    price: number;
    updatedAt: string;
    commandId: string;
    category: {
        id: string;
        name: string;
        commandId: string;
        createdAt: string;
        updatedAt: string;
    };
}

// Интерфейс для пагинации
interface Pagination {
    pageSize: number;
    pageNumber: number;
    total: number;
}

// Интерфейс для ответа API
interface ProductsResponse {
    data: Product[];        // Массив продуктов
    sorting: {
        type: string;
        field: string;
    };
    pagination: Pagination; // Пагинация
}

// Функция для запроса продуктов
const fetchProducts = async (pageNumber: number, pageSize: number = 10): Promise<ProductsResponse> => {
    console.log('fetchProducts called with', { pageNumber, pageSize });
    const response = await axios.get(
        'http://19429ba06ff2.vps.myjino.ru/api/products',
        {
            params: {
                pagination: JSON.stringify({
                    pageSize,
                    pageNumber,
                }),
                sorting: JSON.stringify({ type: 'ASC', field: 'id' }),
                categoryIds: JSON.stringify(["67a50b748e877ac8a963fa3b"]), // Добавлен фильтр по категории
            },
        }
    );

    console.log('fetchProducts response', response.data);
    return response.data;
};

// Сага для загрузки продуктов
export function* productsSaga(action: { payload: { pageNumber: number; pageSize: number } }) {
    try {
        console.log('loadProductsSaga started', action.payload);
        // yield put(startProductsLoading());
        const data: ProductsResponse = yield call(fetchProducts, action.payload.pageNumber, action.payload.pageSize);
        console.log('loadProductsSaga fetched data', data);
        yield put(setProducts({
            products: data.data, // Обращаемся к data
            totalPages: Math.ceil(data.pagination.total / action.payload.pageSize), // Вычисляем количество страниц
            currentPage: action.payload.pageNumber
        }));
    } catch (error: any) {
        console.log('loadProductsSaga error', error.message);
        yield put(loadingFailed(error.message || 'Failed to load products'));
    }
}