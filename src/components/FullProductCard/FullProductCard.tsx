import React, { PropsWithChildren } from 'react';
import './fullproductcard.css';
import logo from './img.png';
import { BasketButton } from '../BasketButton/BasketButton';

interface IModalProps {
  img: string;
  category: string;
  price: number;
  name: string;
  description: string;
  count: number;
}

export const FullProductCard = ({ img, category, price, name, description, count }: PropsWithChildren<IModalProps>) => {
  return (
    <>
      <h1>{name}</h1>
      <div className="container">
        <img src={logo} alt="Your Image"></img>
        <h3>Категория товара: {category}</h3>
        <p>
          Описание:
          <br></br>
          {description}
        </p>
      </div>
      <div>
        <pre>
          Цена за единицу товара: {price} руб. <BasketButton count={count} size="medium" />
        </pre>
      </div>
    </>
  );
};
