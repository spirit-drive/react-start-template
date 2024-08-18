import React from 'react';
import styles from './CartProductCard.module.css';
import AddToCartButton from '../../features/add-to-cart/ui/AddToCartButton';

export interface ICartProductCard {
  title: string;
  price: number;
  image_url: string;
}

const CartProductCard = ({ title, price, image_url }: ICartProductCard) => {
  return (
    <div className={styles.main}>
      <img className={styles.image} src={image_url}></img>
      <div className={styles.info}>
        <div>{title}</div>
        <div className={styles.right_block}>
          <div className={styles.price}>{price} ₽</div>
          <AddToCartButton count={1} />
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
