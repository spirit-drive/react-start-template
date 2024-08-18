import React from 'react';
import styles from './AddToCartButton.module.css';

export interface IAddToCartButton {
  count: number;
}

const AddToCartButton = ({ count }: IAddToCartButton) => {
  return <>{count ? <WithCountButton count={count} /> : <DefaultButton />}</>;
};

const DefaultButton = () => {
  return <button className={styles.button}>Добавить в корзину</button>;
};

const WithCountButton = ({ count }: IAddToCartButton) => {
  return (
    <div className={styles.count_button}>
      <button className={styles.count_side_buttons}>-</button>
      {count}
      <button className={styles.count_side_buttons}>+</button>
    </div>
  );
};

export default AddToCartButton;
