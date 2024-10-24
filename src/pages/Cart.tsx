import React, { FC, useEffect, useState, useMemo } from 'react';
import { CartProduct } from '../components/Product/CartProduct/CartProduct';
import { Product } from '../components/Product/types';
import { useSelector } from 'react-redux';
import { AppState } from '../app/redux/store';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_BY_IDS, ProductsData } from 'src/helper/connections/productConnections';

export const Cart: FC = () => {
  const { products } = useSelector<AppState, AppState['cart']>((state): AppState['cart'] => state.cart);
  const { data } = useQuery<ProductsData>(GET_PRODUCT_BY_IDS, { variables: { ids: products.map((p) => p.productId) } });
  const cart = data?.products?.getMany?.data;
  console.log('cart', products);
  if (!cart || cart.length == 0) {
    return (
      <div className="app-content">
        <h4>Корзина пуста</h4>
      </div>
    );
  }
  return (
    <div className="app-content">
      <div className="cart">
        {cart.map((product: Product) => {
          return (
            <CartProduct
              key={product.id}
              id={product.id}
              title={product.name}
              image={product.photo}
              cost={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};
