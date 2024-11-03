import React, { FC } from 'react';
import { ProductsInfinityList } from 'src/widgets/ProductsInfinityList';

export const Home: FC = () => {
  return (
    <div className="app-content">
      <ProductsInfinityList />
    </div>
  );
};
