import React from 'react';
import styles from './styles.module.css';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

interface ProductDetailProps {
  cost: number;
  images: string[];
  category: string;
  title: string;
  description: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ cost, images, category, title, description }) => {
  return (
    <div className={styles.product_detail_container}>
      {images.map((img, index) => (
        <img key={index} src={img} alt={title} />
      ))}
      <h2>{title}</h2>
      <p className={styles.category}>Category: {category}</p>
      <p>{description}</p>
      <p className={styles.cost}>{cost}</p>
      <AddToCartButton count={0} />
    </div>
  );
};

export default ProductDetail;
