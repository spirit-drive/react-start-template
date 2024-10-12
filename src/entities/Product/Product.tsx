import React from 'react';
import Basket from '../Basket/Basket';
import s from './Product.module.sass';

interface ProductProps {
  price: number;
  images: string[];
  category: string;
  title: string;
  description: string;
}

const Product = ({ price, images, category, title, description }: ProductProps) => {
  return (
    <div className={s['product']}>
      <div className={s['product__images-carousel']}>
        <div className={s['product__images-container']}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`${title} image ${index + 1}`} />
          ))}
        </div>
      </div>
      <h1>{category}</h1>
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}$</p>
      <Basket count={0} />
    </div>
  );
};

export default Product;
