import React, { useEffect, useState } from 'react';
import './css/productsList.css';

interface Product {
    id: string;
    name: string;
    price: number;
    photo: string;
}

interface ProductsListProps {
    products: Product[];
    onAdd?: (product: Product) => void;
    onDelete?: (id: string) => void;
    onEdit?: (id: string) => void;
}

const ProductsList: React.FC<ProductsListProps> = ({ products, onAdd, onDelete, onEdit }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = () => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            try {
                const cartObjects = JSON.parse(storedCart) as Product[];
                setCartItems(cartObjects);
            } catch (error) {
                console.error('Ошибка чтения корзины из localStorage:', error);
                setCartItems([]);
            }
        }
    };

    const handleAddToCart = (product: Product) => {
        if (!onAdd) return;

        onAdd(product); // Вызываем переданную функцию

        // Добавляем товар в `localStorage`
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="products-list">
            {products.map((product) => {
                const isInCart = cartItems.some((item) => item.id === product.id);

                return (
                    <div key={product.id} className="product-card">
                        <img src={product.photo} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price} ₽</p>

                        {isInCart ? (
                            <p className="in-cart-text">Уже в корзине</p>
                        ) : (
                            onAdd && <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">Добавить</button>
                        )}

                        {onEdit && <button onClick={() => onEdit(product.id)}>Редактировать</button>}
                        {onDelete && <button onClick={() => onDelete(product.id)}>Удалить</button>}
                    </div>
                );
            })}
        </div>
    );
};

export default ProductsList;