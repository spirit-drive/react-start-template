import React from 'react';
import styles from './ProductCard.module.css';
import AddToCartButton from '../../features/add-to-cart/ui/AddToCartButton';

export interface IProductCard {
  id: string;
  title: string;
  desc: string;
  price: number;
  image_url: string;
}

const ProductCard = ({ title, desc, price, image_url }: IProductCard) => {
  return (
    <article className={styles.card_block}>
      <img className={styles.image} src={image_url} />
      <div className={styles.container}>
        <div className={styles.price}>{price} ₽</div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.desc}>{desc}</div>
        <AddToCartButton count={0} />
      </div>
    </article>
  );
};

export default ProductCard;
