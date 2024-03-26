import React from 'react';
import DisplayProductBasket from '../../components/DisplayProductBasket/DisplayProductBasket';
import { useStore } from '../../helper/useStore';
import { DisplayProductProps } from '../../types';

const Basket = () => {
  const { product } = useStore();

  return (
    <section>
      {product.map((product: DisplayProductProps) => {
        return (
          <DisplayProductBasket
            key={product.key}
            coast={product.coast}
            img={product.img}
            title={product.title}
            shortDescription={product.description}
          />
        );
      })}
    </section>
  );
};

export default Basket;
