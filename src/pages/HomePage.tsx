import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "src/app/providers/StoreProvider";
import Pagination from "src/shared/components/Pagination";
import ProductsList from "src/shared/components/ProductsList";
import Loader from "src/shared/components/Loader";

interface Product {
    id: string;
    name: string;
    price: number;
    photo: string;
}

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const { products, isLoading, error, totalPages, currentPage } = useSelector((state: RootState) => state.products);
    const [page, setPage] = useState(currentPage);

    useEffect(() => {
        dispatch({ type: 'products/startProductsLoading', payload: { pageNumber: page, pageSize: 10 } });
    }, [dispatch, page]);

    const handlePageChange = (newPage: number) => {
        console.log('Page changed to', newPage);
        setPage(newPage);
    };

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const addToCart = (product: Product) => {
        const storedCart = localStorage.getItem('cart');
        const cartItems = storedCart ? JSON.parse(storedCart) : [];
        const updatedCart = [...cartItems, product];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        alert(`${product.name} добавлен в корзину!`);
    };

    return (
        <div>
            <h1>Товары</h1>
            <ProductsList products={products} onAdd={addToCart} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default HomePage;