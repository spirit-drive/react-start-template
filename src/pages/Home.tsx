import React, { FC } from 'react';
import { ProductList } from '../components/Product/ProductList';
import { Product, generateRandomProduct } from '../components/Product/types';
import { useProducts } from '../hooks/useProducts';

export const Home: FC = () => {
  const { getProducts } = useProducts();
const productList: Product[] = getProducts(100)
  return (
    <div className="app-content">
      <ProductList products={productList} />
    </div>
  );
};
