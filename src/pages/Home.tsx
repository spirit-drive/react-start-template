import React, { FC } from 'react';
import { ProductList } from '../components/Product/ProductList';
export const Home: FC = () => {

  return (
    <div className="app-content">
      <ProductList  />
    </div>
  );
};
