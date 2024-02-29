import React from 'react';
import './ItemCardFull.scss';
import { Badge } from '../../Badge';
import { ButtonIntoCart } from 'src/components/Buttons/ButtonIntoCart';

export const ItemCardFull: React.FC = () => {
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
                <h4>Rexus X Pro 5</h4>
              </div>
              <div className="review-sold">
                <p>5.0/5.0</p>
                <span className="vr" />
                <p>200+ отзывов</p>
                <span className="vr" />
                <p>30 продано</p>
              </div>
            </div>
            <div className="badge-list">
              <Badge text="Mouse" />
              <Badge text="Best Seller" color="var(--violet-800)" bgColor="var(--violet-50)" />
            </div>
          </div>
          <div className="price">
            <p>2 500 руб.</p>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deleniti dolore dolorum eaque expedita
            fugiat id molestias nostrum numquam odio odit pariatur, quibusdam quidem reiciendis similique totam vel vero
            vitae!
          </div>
          <ButtonIntoCart />
        </div>
      </div>
    </div>
  );
};
