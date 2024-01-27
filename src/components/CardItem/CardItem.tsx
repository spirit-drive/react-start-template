import React from 'react';
import styles from './styles.module.css';

interface CartItemProps {
  title: string;
}

const CardItem: React.FC<CartItemProps> = ({ title }) => {
  return (
    <div className={styles.cart_item_container}>
      <h2>{title}</h2>
      <button>Удалить</button>
    </div>
  );
};

export default CardItem;
