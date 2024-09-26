import React, { FC, useEffect, useState } from 'react';
import { CartProduct } from '../components/Product/CartProduct/CartProduct';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../components/Product/types';
export const Cart: FC = () => {
  const { getProducts } = useProducts();
  const [products, setProducts] = useState<Product[]>([]);

  const min = 1;
  const max = 5;

  const countProducts = () => {
    return parseInt((Math.random() * (max - min) + min).toString());
  };

  useEffect(() => {
    setProducts(getProducts(4));
  }, [getProducts]);

  return (
    <div className="app-content">
      <div className="cart">
        {products.map((product: Product) => {
          return (
            <CartProduct
              key={product.id}
              title={product.name}
              image={product.photo}
              cost={product.price}
              style={{ padding: '5px 0' }}
              count={countProducts()}
            />
          );
        })}
      </div>
    </div>
  );
};
