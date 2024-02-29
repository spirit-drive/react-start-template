import React from 'react';

import './ItemCardInCart.scss';
import { ButtonIntoCart } from '../../Buttons/ButtonIntoCart';
import { Badge } from '../../Badge';

type ItemCardInCartProps = {
  imgSrc?: string;
  label?: string;
  price?: string;
};
export const ItemCardInCart: React.FC<ItemCardInCartProps> = ({ label = 'Rexus X Pro 5', price = '2500 руб.' }) => {
  return (
    <>
      <div className="item-card-in-cart">
        <div className="main-image">
          <img className="image" src={require('../../../img/mouse1.png')} />
        </div>
        <div className="container">
          <div className="label-type">
            <div className="label">{label}</div>
            <Badge text="Mouse" />
          </div>
          <div className="price-button-list">
            <div className="price">{price}</div>
            <div className="button-list">
              <ButtonIntoCart count={10} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
