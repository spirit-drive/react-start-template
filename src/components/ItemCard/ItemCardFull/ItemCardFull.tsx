import React from 'react';
import './ItemCardFull.scss';
import { Badge } from '../../Badge';
import { ButtonIntoCart } from '../../Buttons';

type ItemCardFullProps = {
  imgSrc?: Array<string>;
  label?: string;
  rate?: string;
  reviews?: string;
  sold?: string;
  price?: string;
  description?: string;
  badges?: Array<string>;
};

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deleniti dolore dolorum eaque expedita fugiat id molestias nostrum numquam odio odit pariatur, quibusdam quidem reiciendis similique totam vel vero vitae!';

export const ItemCardFull: React.FC<ItemCardFullProps> = ({
  label = 'Rexus X Pro 5',
  reviews = '200 отзывов',
  rate = '5.0/5.0',
  sold = '20 продано',
  price = '2 500 руб.',
  description = lorem,
}) => {
  return (
    <div className="item-card-full">
      <div className="content">
        <div className="images">
          <div className="main-image">
            <img src={require('../../../img/mouseMainFull.png')} />
          </div>
          <div className="image-list">
            <img className="selected" src={require('../../../img/mouse1.png')} />
            <img src={require('../../../img/mouse2.png')} />
            <img src={require('../../../img/mouse3.png')} />
          </div>
        </div>
      </div>
      <div className="item-card-detail">
        <div className="item-information">
          <div className="label-badge">
            <div className="label-review-sold">
              <div className="label">
                <h4>{label}</h4>
              </div>
              <div className="review-sold">
                <p>{rate}</p>
                <span className="vr" />
                <p>{reviews}</p>
                <span className="vr" />
                <p>{sold}</p>
              </div>
            </div>
            <div className="badge-list">
              <Badge text="Mouse" />
              <Badge text="Best Seller" color="var(--violet-800)" bgColor="var(--violet-50)" />
            </div>
          </div>
          <div className="price">{price}</div>
          <div className="description">{description}</div>
          <ButtonIntoCart disabled={true} />
        </div>
      </div>
    </div>
  );
};
