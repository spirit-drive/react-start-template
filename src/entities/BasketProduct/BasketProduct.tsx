import React from 'react';
import s from './BasketProduct.module.sass';

const BasketProduct = () => {
  return (
    <div className={s['basket-product']}>
      <button className={s['basket-product__delete-button']}>Delete</button>
    </div>
  );
};

export default BasketProduct;
