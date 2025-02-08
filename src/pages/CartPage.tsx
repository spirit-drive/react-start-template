import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartItem from './CartItem';
import './css/cart.css';

interface CartItemData {
    id: string;
    photo: string;
    desc: string;
    price: number;
}

interface Order {
    id: string;
    createdAt: string;
    status: string;
    products: Array<{
        product: { id: string; name: string; price: number };
        quantity: number;
    }>;
}

const API_URL = 'http://19429ba06ff2.vps.myjino.ru/api/orders';

const Cart: React.FC = () => {
    const [items, setItems] = useState<CartItemData[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [orders, setOrders] = useState<Order[]>([]);

    // Загружаем корзину из localStorage
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setItems(JSON.parse(storedCart));
        }
    }, []);

    // Загружаем ID заказов из localStorage и получаем их данные с сервера
    useEffect(() => {
        fetchOrders();
    }, []);

    // Удаление товара из корзины
    const handleRemove = (id: string) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
    };

    // Получение заказов по ID из localStorage
    const fetchOrders = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setMessage("Ошибка: Пользователь не авторизован");
                return;
            }

            const storedOrderIds = localStorage.getItem("orderIds");
            const orderIds: string[] = storedOrderIds ? JSON.parse(storedOrderIds) : [];

            if (orderIds.length === 0) {
                setOrders([]);
                return;
            }

            const fetchedOrders = await Promise.all(
                orderIds.map(async (id) => {
                    try {
                        const { data } = await axios.get<Order>(`${API_URL}/${id}`, {
                            headers: { Authorization: `Bearer ${token}` },
                        });
                        return data;
                    } catch (error) {
                        console.error(`Ошибка при загрузке заказа ${id}:`, error);
                        return null;
                    }
                })
            );

            // Фильтруем успешные заказы
            setOrders(fetchedOrders.filter((order) => order !== null) as Order[]);
        } catch (error: any) {
            console.error("Ошибка при загрузке заказов:", error);
            setMessage("Не удалось загрузить заказы");
        }
    };

    // Оформление заказа
    const handleOrder = async () => {
        if (items.length === 0) {
            setMessage("Корзина пуста");
            return;
        }

        setLoading(true);
        setMessage(null);

        const orderData = {
            products: items.map(item => ({
                id: item.id,
                quantity: 1,
            })),
        };

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setMessage("Ошибка: Пользователь не авторизован");
                setLoading(false);
                return;
            }

            const { data } = await axios.post<Order>(API_URL, orderData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setMessage("Заказ успешно оформлен!");
            setItems([]); // Очищаем корзину
            localStorage.removeItem("cart");

            // Сохраняем ID нового заказа в localStorage
            const storedOrderIds = localStorage.getItem("orderIds");
            const orderIds: string[] = storedOrderIds ? JSON.parse(storedOrderIds) : [];
            orderIds.push(data.id);
            localStorage.setItem("orderIds", JSON.stringify(orderIds));

            fetchOrders(); // Загружаем обновлённый список заказов
        } catch (error: any) {
            console.error("Ошибка при оформлении заказа:", error);
            setMessage(error.response?.data?.message || "Ошибка при оформлении заказа");
        } finally {
            setLoading(false);
        }
    };

    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    const discountedPrice = totalPrice - (totalPrice * discount) / 100;

    return (
        <div className="cart">

            <div className="cart-items">
                {items.length === 0 ? (
                    <p>Корзина пуста</p>
                ) : (
                    items.map(item => (
                        <CartItem
                            key={item.id}
                            imageUrl={item.photo}
                            description={item.desc}
                            price={item.price}
                            onRemove={() => handleRemove(item.id)}
                        />
                    ))
                )}
            </div>

            <div className="cart-summary">
                <h2>Итоги</h2>
                <p>Количество товаров: {items.length}</p>
                <p>Скидка: {discount}%</p>
                <p>Цена всего: {totalPrice}₽</p>
                <p>Итоговая цена: {discountedPrice.toFixed(2)}₽</p>
                <button onClick={() => setDiscount(10)}>Применить скидку 10%</button>
                <br/>

                {items.length > 0 && (
                    <button onClick={handleOrder} disabled={loading} className="order-btn green">
                        {loading ? "Оформляем..." : "Оформить заказ"}
                    </button>
                )}

                {message && <p className="message">{message}</p>}
            </div>

            <div className="orders">
                <h2>Мои заказы</h2>
                {orders.length === 0 ? (
                    <p>У вас пока нет заказов</p>
                ) : (
                    orders.map(order => (
                        <div key={order.id} className="order">
                            <p><strong>ID заказа:</strong> {order.id}</p>
                            <p><strong>Дата:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                            <p><strong>Статус:</strong> {order.status}</p>
                            <p><strong>Товары:</strong></p>
                            <ul>
                                {order.products.map(prod => (
                                    <li key={prod.product.id}>
                                        {prod.product.name} — {prod.product.price}₽ x {prod.quantity}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
};

export default Cart;