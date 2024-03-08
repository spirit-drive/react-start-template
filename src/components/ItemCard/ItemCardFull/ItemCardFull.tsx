import React from 'react';
import { Badge } from '../../Badge';
import { ButtonIntoCart } from '../../Buttons';
import * as styles from './ItemCardFull.module.scss';

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
    <div className={styles.itemCardFull}>
      <div className={styles.content}>
        <div className={styles.images}>
          <div className={styles.mainImage}>
            <img src={require('../../../img/mouseMainFull.png')} />
          </div>
          <div className={styles.imageList}>
            <img className={styles.selected} src={require('../../../img/mouse1.png')} />
            <img src={require('../../../img/mouse2.png')} />
            <img src={require('../../../img/mouse3.png')} />
          </div>
        </div>
      </div>
      <div className={styles.itemCardDetail}>
        <div className={styles.itemInformation}>
          <div className={styles.labelBadge}>
            <div className={styles.labelReviewSold}>
              <div className={styles.label}>
                <h4>{label}</h4>
              </div>
              <div className={styles.reviewSold}>
                <p>{rate}</p>
                <span className={styles.vr} />
                <p>{reviews}</p>
                <span className={styles.vr} />
                <p>{sold}</p>
              </div>
            </div>
            <div className={styles.badgeList}>
              <Badge text="Mouse" />
              <Badge text="Best Seller" color="var(--violet-800)" bgColor="var(--violet-50)" />
            </div>
          </div>
          <div className={styles.price}>{price}</div>
          <div className={styles.description}>{description}</div>
          <ButtonIntoCart disabled={true} />
        </div>
      </div>
    </div>
  );
};
