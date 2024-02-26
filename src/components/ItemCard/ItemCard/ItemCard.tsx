import React from 'react';
import './ItemCard.scss';

export const ItemCard = () => {
  return (
    <div className="item-card">
      <img className="item-card_image" src={require('../../../img/cover.png')} />
      <div className="item-card_content">
        <div className="item-card_header">Header</div>
        <div className="item-card_description">Description'</div>
        <div className="item-card_price">101 rub.</div>
      </div>
    </div>
  );
};
