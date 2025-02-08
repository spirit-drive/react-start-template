import React from 'react';
import './css/productForm.css';

interface ProductFormProps {
    title: string;
    buttonText: string;
    productData: {
        name: string;
        photo: string;
        desc: string;
        oldPrice: string;
        price: string;
    };
    loading: boolean;
    message: string | null;
    onSubmit: (e: React.FormEvent) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBack: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({title, buttonText, productData, loading, message, onSubmit, onChange, onBack,}) => {
    return (
        <div className="product-form-container">
            <h1>{title}</h1>
            <button onClick={onBack} className="back-button">Назад</button>

            <form onSubmit={onSubmit} className="product-form">
                <input
                    type="text"
                    name="name"
                    value={productData.name}
                    onChange={onChange}
                    placeholder="Название"
                    required
                />
                <input
                    type="text"
                    name="photo"
                    value={productData.photo}
                    onChange={onChange}
                    placeholder="Фото (URL)"
                />
                <textarea
                    name="desc"
                    value={productData.desc}
                    onChange={onChange}
                    placeholder="Описание"
                />
                <input
                    type="number"
                    name="oldPrice"
                    value={productData.oldPrice}
                    onChange={onChange}
                    placeholder="Старая цена"
                />
                <input
                    type="number"
                    name="price"
                    value={productData.price}
                    onChange={onChange}
                    placeholder="Цена"
                    required
                />
                <button type="submit" disabled={loading} className="submit-button">
                    {loading ? 'Загрузка...' : buttonText}
                </button>
            </form>

            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default ProductForm;