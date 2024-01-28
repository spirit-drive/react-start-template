import React from 'react';
import styles from './styles.module.css';

export interface CartItemProps {
  title: string;
}

const CartItem: React.FC<CartItemProps> = ({ title }) => {
  return (
    <div className={styles.cart_item_container}>
      <h2>{title}</h2>
      <button>Удалить</button>
    </div>
  );
};

export default CartItem;
