import React from 'react';

import cn from 'clsx';
import './product-full-description.css';
import {BasketButton} from "../button-basket/BasketButton";

interface ProductCardProps {
  image?: string;
  price: string;
  name: string;
  category: string;
  description?: string;
}

const ProductFullDescription: React.FC<ProductCardProps> = ({ image, price, name, description, category }) => {
  return (
    <div className={cn('product-full-card-container')}>
      <div className={cn('product-full-card-image-container')}>
        <img src={image} alt={'full-card'} />
      </div>
        <div className={cn('product-full-card-description-container')}>
            <div className={cn('product-full-card-description')}>
                <div className={cn('product-full-card-title')}>
                    <span>{name}</span>
                </div>
                <p>{description}</p>
                <div className={cn('product-full-card-price')}>
                    <span>{price}</span>
                </div>
                <div className={cn('product-full-card-category')}>
                    <span>{category}</span>
                </div>
                <div className={cn('product-full-card-to-basket-button')}>
                    <BasketButton/>
                </div>
            </div>

        </div>

    </div>
  );
};

export default ProductFullDescription;
