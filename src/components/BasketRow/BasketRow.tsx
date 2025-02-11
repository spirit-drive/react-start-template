import React from 'react';
import './basketrow.css';
import { BasketButton } from '../BasketButton/BasketButton';
import delete_logo from './icon_delete.svg';

interface BasketRowProps {
  img: string;
  name: string;
  price: number;
  count: number;
}

export function BasketRow({ img, name, count, price }: BasketRowProps) {
  return (
    <div className="basket-row-wrapper">
      <div className="imgProduct">
        <img className="img" src={img} alt="ProductImg" />
      </div>
      <div className="productName">{name}</div>
      <div className="buttonDelete">
        <button>
          <img src={delete_logo} alt="Delete logo" />
        </button>
      </div>
      <div className="price">За шт.: {price} руб.</div>
      <div className="basketButton">
        <BasketButton count={count} />
      </div>
      <div className="total">Итого: {price * count} руб.</div>
    </div>
  );
}
