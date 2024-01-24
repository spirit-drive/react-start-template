import React from 'react';
import './ItemCard.scss';

export const ItemCard = () => {
  return (
    <div className="item-card">
      <img className="item-card_image"></img>
      <div className="item-card_content">
        <div className="item-card_header"></div>
        <div className="item-card_description"></div>
        <div className="item-card_price"></div>
      </div>
    </div>
  );
};
