import React from 'react';
import styles from './BasketProduct.module.sass';

const BasketProduct = () => {
  return (
    <div className={styles['basket-product']}>
      <button className={styles['basket-product__delete-button']}>Delete</button>
    </div>
  );
};

export default BasketProduct;
