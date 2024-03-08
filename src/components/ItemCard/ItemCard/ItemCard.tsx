import React from 'react';
import * as styles from './ItemCard.module.scss';
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
    <div className={styles.itemCard}>
      <img className={styles.image} src={require('../../../img/mouseMainFull.png')} />
      <div className={styles.content}>
        <div className={styles.badgeList}>
          <Badge text="Mouse" />
          <Badge text="Best Seller" />
        </div>
        <div className={styles.label}>{label}</div>
        <div className={styles.description}>{cutText(description)}</div>
        <div className={styles.price}>{price}.</div>
      </div>
    </div>
  );
};
