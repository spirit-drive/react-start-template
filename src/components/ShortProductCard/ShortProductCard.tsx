import React, { PropsWithChildren } from 'react';
import './shortproductcard.css';
import logo from './img.png';
import { BasketButton } from '../BasketButton/BasketButton';

interface IModalProps {
  img: string;
  price: number;
  name: string;
  description: string;
  count: number;
}

export const ShortProductCard = ({ img, price, name, description, count }: PropsWithChildren<IModalProps>) => {
  return (
    <div className="short-product-card-row-wrapper">
      <div className="logo">
        <img className="img" src={logo} alt="fireSpot" />
      </div>
      <div className="name">
        <h1>{name}</h1>
      </div>
      <div className="price">
        <p>{price} руб.</p>
      </div>
      <div className="basketButton">
        <BasketButton size={'small'} count={count} />
      </div>
      <div className="description">
        <div className={'div-max-height'}>{description}</div>
      </div>
    </div>
  );
};
