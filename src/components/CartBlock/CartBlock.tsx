import React, { FC, ReactElement } from 'react';
import './CartBlock.scss';

/**
 * Компонент блок с корзиной. Выводится в правой части шапки сайта.
 */
export const CartBlock: FC = (): ReactElement => {
  return (
    <div className="cart-block">
      <a className="btn p-1">
        <i className="fa-solid fa-heart"></i>
        <span className="badge text-bg-warning cart-badge bg-warning rounded-circle">3</span>
      </a>
      <button
        className="btn p-1"
        id="cart-open"
        type="button"
        data-bs-toggle="offcanvas2"
        data-bs-target="#offcanvasCart"
        aria-controls="offcanvasCart"
      >
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="badge text-bg-warning cart-badge bg-warning rounded-circle">5</span>
      </button>
    </div>
  );
};
