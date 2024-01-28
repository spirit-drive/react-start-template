import React from 'react';
import styles from './styles.module.css';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

export interface ProductPreviewProps {
  cost: number;
  image: string;
  title: string;
  description: string;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ cost, image, title, description }) => {
  return (
    <div className={`${styles.product_preview_container} ${styles.cost}`}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description.slice(0, 100)}...</p>
      <p>{cost}</p>
      <AddToCartButton count={0} />
    </div>
  );
};

export default ProductPreview;
