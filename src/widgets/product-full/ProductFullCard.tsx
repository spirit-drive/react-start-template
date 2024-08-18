import React from 'react';
import styles from './ProductFullCard.module.css';
import AddToCartButton from '../../features/add-to-cart/ui/AddToCartButton';

export interface IProductFullCard {
  title: string;
  desc: string;
  price: number;
  image_url: string;
}

const ProductFullCard = ({ title, desc, price, image_url }: IProductFullCard) => {
  return (
    <div className={styles.main}>
      <img className={styles.image} src={image_url} alt={title} />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.price}>{price} ₽</div>
        <div className={styles.desc}>{desc}</div>
        <div className={styles.button}>
          <AddToCartButton count={0} />
        </div>
      </div>
    </div>
  );
};

export default ProductFullCard;
