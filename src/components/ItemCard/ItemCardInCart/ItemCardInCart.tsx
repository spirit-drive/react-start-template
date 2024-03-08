import React from 'react';

import * as styles from './ItemCardInCart.module.scss';
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
      <div className={styles.itemCardInCart}>
        <div className={styles.mainImage}>
          <img className={styles.image} src={require('../../../img/mouse1.png')} />
        </div>
        <div className={styles.container}>
          <div className={styles.labelType}>
            <div className={styles.label}>{label}</div>
            <Badge text="Mouse" />
          </div>
          <div className={styles.priceButtonList}>
            <div className={styles.price}>{price}</div>
            <div className={styles.buttonList}>
              <ButtonIntoCart count={10} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
