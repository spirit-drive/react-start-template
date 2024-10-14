import React, { FC, useEffect, useState } from 'react';
import { CartProduct } from '../components/Product/CartProduct/CartProduct';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../components/Product/types';
import { useSelector } from 'react-redux';
import { AppState } from '../app/redux/store';

export const Cart: FC = () => {
  const { getProducts } = useProducts();
  const [products, setProducts] = useState<Product[]>([]);
  const cart = useSelector<AppState, AppState['cart']>((state): AppState['cart'] => state.cart);

  useEffect(() => {
    let cartProducts: Product[] = [];
    const cartIds: string[] = [];
    cart.products.map((cart) => {
      cartIds.push(cart.productId);
    });
    let getproducts = getProducts(10);
    cartProducts = getproducts.filter((p: Product) => cartIds.includes(p.id));
    setProducts(cartProducts);
  }, [JSON.stringify(cart.products)]);

  if (!products.length || products.length == 0) {
    return (
      <div className="app-content">
        <h4>Корзина пуста</h4>
      </div>
    );
  }
  return (
    <div className="app-content">
      <div className="cart">
        {products.map((product: Product) => {
          return (
            <CartProduct
              key={product.id}
              id={product.id}
              title={product.name}
              image={product.photo}
              cost={product.price}
              style={{ padding: '5px 0' }}
            />
          );
        })}
      </div>
    </div>
  );
};
