import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ProductForm from 'src/shared/components/ProductForm';

const API_URL = 'http://19429ba06ff2.vps.myjino.ru/api/products';

const EditProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Получаем ID товара из URL
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [productData, setProductData] = useState({
        name: '',
        photo: '',
        desc: '',
        oldPrice: '',
        price: '',
        categoryId: JSON.stringify(["67a50b748e877ac8a963fa3b"]),
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${API_URL}/${id}`);
                setProductData(response.data);
            } catch (error) {
                console.error('Ошибка загрузки товара:', error);
                setMessage('Ошибка при загрузке товара');
            }
        };

        fetchProduct();
    }, [id]);

    const handleUpdateProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const updatedProduct = {
                ...productData,
                categoryId: productData.categoryId || "67a50b748e877ac8a963fa3b",
            };

            await axios.put(`${API_URL}/${id}`, updatedProduct, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });

            setMessage('Товар успешно обновлен');
        } catch (error: any) {
            console.error('Ошибка обновления товара:', error);
            setMessage(error.response?.data?.message || 'Ошибка при обновлении товара');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <ProductForm
                title="Редактировать товар"
                buttonText="Сохранить"
                productData={productData}
                loading={loading}
                message={message}
                onSubmit={handleUpdateProduct}
                onChange={(e) => setProductData({ ...productData, [e.target.name]: e.target.value })}
                onBack={() => navigate('/admin')}
            />
        </div>
    );
};

export default EditProductPage;