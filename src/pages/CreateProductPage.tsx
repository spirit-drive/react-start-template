import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/app/providers/StoreProvider';
import { useNavigate } from 'react-router-dom';
import Pagination from 'src/shared/components/Pagination';
import ProductsList from 'src/shared/components/ProductsList';
import Loader from 'src/shared/components/Loader';
import axios from 'axios';
import ProductForm from "src/shared/components/ProductForm";

const API_URL = 'http://19429ba06ff2.vps.myjino.ru/api/products';

const CreateProductPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Данные из Redux
    const { products, isLoading, error, totalPages, currentPage } = useSelector((state: RootState) => state.products);
    const [page, setPage] = useState(currentPage);
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState({
        name: '',
        photo: '',
        desc: '',
        oldPrice: '',
        price: '',
        categoryId: JSON.stringify(["67a50b748e877ac8a963fa3b"]),
    });

    // Загружаем товары при изменении страницы
    useEffect(() => {
        dispatch({ type: 'products/startProductsLoading', payload: { pageNumber: page, pageSize: 10 } });
    }, [dispatch, page]);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    // Удаление товара
    const handleDeleteProduct = async (productId: string) => {
        if (!window.confirm('Вы уверены, что хотите удалить товар?')) return;

        try {
            await axios.delete(`${API_URL}/${productId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });

            setMessage('Товар удален');
            dispatch({ type: 'products/startProductsLoading', payload: { pageNumber: page, pageSize: 10 } }); // Обновляем список
        } catch (error: any) {
            setMessage(error.response?.data?.message || 'Ошибка при удалении товара');
        }
    };

    const handleCreateProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        // Преобразуем данные перед отправкой
        const productToSend = {
            ...productData,
            price: Number(productData.price),
            oldPrice: productData.oldPrice ? Number(productData.oldPrice) : null,
            categoryId: "67a50b748e877ac8a963fa3b",
        };

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Ошибка авторизации: отсутствует токен.');
            }

            await axios.post(API_URL, productToSend, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setMessage('Товар успешно добавлен');
            setProductData({
                name: '',
                photo: '',
                desc: '',
                oldPrice: '',
                price: '',
                categoryId: JSON.stringify(["67a50b748e877ac8a963fa3b"]),
            });

            dispatch({ type: 'products/startProductsLoading', payload: { pageNumber: page, pageSize: 10 } });
        } catch (error: any) {
            console.error('Ошибка создания товара:', error);
            setMessage(error.response?.data?.message || 'Ошибка при создании товара');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>

            <ProductForm
                title="Создать товар"
                buttonText="Создать"
                productData={productData}
                loading={loading}
                message={message}
                onSubmit={handleCreateProduct}
                onChange={(e) => setProductData({ ...productData, [e.target.name]: e.target.value })}
                onBack={() => navigate('/admin')}
            />

            <h2>Список товаров</h2>
            {message && <p style={{ color: 'green' }}>{message}</p>}

            {isLoading ? (
                <Loader />
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <>
                    <ProductsList
                        products={products}
                        onDelete={handleDeleteProduct}
                        onEdit={(id) => navigate(`/edit-product/${id}`)}
                    />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </>
            )}
        </div>
    );
};

export default CreateProductPage;