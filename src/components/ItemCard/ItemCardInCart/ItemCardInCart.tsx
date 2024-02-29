import React from 'react';

import './ItemCardInCart.scss';
import { ButtonIntoCart } from '../../Buttons/ButtonIntoCart';
export const ItemCardInCart: React.FC = () => {
  return (
    <>
      <div className="item-card-in-cart">
        <div className="main-image">
          <img className="image" src={require('../../../img/mouse1.png')} />
        </div>
        <div className="container">
          <div className="label-type">
            <div className="label">Rexus X Pro 5</div>
            <div className="type">Комп.мышь</div>
          </div>
          <div className="price-button-list">
            <div className="price"> 2500 руб.</div>
            <div className="button-list">
              <ButtonIntoCart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
