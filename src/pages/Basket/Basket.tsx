import React from 'react';
import { useSelector } from 'react-redux';
import DisplayProductBasket from '../../components/DisplayProductBasket/DisplayProductBasket';
import { RootState } from '../../store/store';
import { DisplayProductBasketProps } from '../../types';

const Basket = () => {
  const product = useSelector((store: RootState) => store.productBasketSlice.productBasketList);
  if(product.length === 0) {
    return (
      <h2>Корзина пуста</h2>
    )
  }

  return (
    <section>
      {product.map((product: DisplayProductBasketProps) => {
        return (
          <DisplayProductBasket
            key={product.key}
            coast={product.coast}
            img={product.img}
            title={product.title}
            shortDescription={product.shortDescription}
          />
        );
      })}
    </section>
  );
};

export default Basket;
