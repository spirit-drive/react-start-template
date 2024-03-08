import React from 'react';
import './ItemCard.module.scss';
import { Badge } from '../../Badge';
import { cutText } from '../../../helpers/helpers';

type ItemCardProps = {
  price?: string;
  description?: string;
  label?: string;
  imgSrc?: string;
};

export const ItemCard: React.FC<ItemCardProps> = ({
  price = '100 руб',
  description = 'Description',
  label = 'Label',
}) => {
  return (
    <div className="item-card">
      <img className="image" src={require('../../../img/mouseMainFull.png')} />
      <div className="content">
        <div className="badge-list">
          <Badge text="Mouse" />
          <Badge text="Best Seller" />
        </div>
        <div className="label">{label}</div>
        <div className="description">{cutText(description)}</div>
        <div className="price">{price}.</div>
      </div>
    </div>
  );
};
