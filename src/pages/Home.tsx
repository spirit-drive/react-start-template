import React, { FC } from 'react';
import { ProductList } from '../components/Product/ProductList';
import { Product, generateRandomProduct } from '../components/Product/types';

const productList: Product[] = [
  generateRandomProduct('55'),
  generateRandomProduct('55'),
  generateRandomProduct('55'),
  generateRandomProduct('55'),
  generateRandomProduct('55'),
];

export const Home: FC = () => {
  return (
    <div className="app-content">
      <ProductList products={productList} />
    </div>
  );
};
