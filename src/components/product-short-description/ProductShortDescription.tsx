import React from 'react';
import cn from 'clsx';
import './product-short-description.css';
import { BasketButton } from '../../components/button-basket/BasketButton';

interface ProductCardProps {
  image?: string;
  price: string;
  name: string;
  description?: string;
}

export const ProductShortDescription: React.FC<ProductCardProps> = ({ price, name, description, image }) => {
  return (
    <>
      <div className={cn('product-card-container')}>
        {image && (
          <div className={cn('product-card-image-container')}>
            <img src={image} alt={'product'} />
          </div>
        )}
        <div className={cn('product-card-description-container')}>
          <div className={cn('product-card-name-text')}>
            <span>{name}</span>
          </div>
          <div className={cn('product-card-description')}>
            <p>{description}</p>
          </div>
          <div className={cn('product-card-price')}>
            <span>{price}</span>
          </div>
          <div>
            <BasketButton />
          </div>
        </div>
      </div>
    </>
  );
};
