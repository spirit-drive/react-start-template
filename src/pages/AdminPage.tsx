import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../app/providers/StoreProvider';
import { fetchCategories, createCategory } from './slice/categoriesSlice';
import Loader from "src/shared/components/Loader";
import CategoryList from "src/shared/components/CategoryList";
import './css/admin.css';

const AdminPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { categories, isLoading, error, successMessage } = useSelector((state: RootState) => state.categories);
    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleCreateCategory = () => {
        if (categoryName.trim()) {
            dispatch(createCategory({ name: categoryName }));
            setCategoryName('');
        }
    };

    return (
        <div>
            <h1>Admin Page</h1>

            <h2>Список категорий:</h2>
            {isLoading ? <Loader /> : error ? <p style={{ color: 'red' }}>Ошибка: {error}</p> : <CategoryList categories={categories} />}

            <div className="container">
                <div className="left">
                    <h2>Создать категорию:</h2>
                    <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder="Введите название категории" />
                    <button onClick={handleCreateCategory} disabled={isLoading}>Создать</button>
                </div>

                <div className="right">
                    <h2>Управление товарами</h2>
                    <button onClick={() => navigate('/create-product')}>Перейти к созданию товара</button>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;