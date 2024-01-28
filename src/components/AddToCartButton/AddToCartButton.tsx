import React from 'react';
import styles from './styles.module.css';

export interface AddToCartButtonProps {
  count: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ count }) => {
  if (count > 0) {
    return (
      <div className={styles.button_container}>
        <button>-</button>
        <input value={count} />
        <button>+</button>
      </div>
    );
  }

  return <button className={styles.single_button}>Купить</button>;
};

export default AddToCartButton;
