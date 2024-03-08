import React from 'react';
import * as styles from './ButtonIntoCart.module.scss';

type ButtonIntoCartProps = {
  count?: number;
  disabled?: boolean;
};

export const ButtonIntoCart: React.FC<ButtonIntoCartProps> = ({ count = 0, disabled = false }) => {
  return (
    <div className={styles.disabled ? `disabled` : ``}>
      {count == 0 ? (
        <div className={[styles.buttonIntoCart, styles.buy].join(' ')}>
          <span>В корзину</span>
        </div>
      ) : (
        <div className={[styles.buttonIntoCart, styles.count].join(' ')}>
          <span>
            Количество <button>+</button> {count} <button>-</button>
          </span>
        </div>
      )}
    </div>
  );
};
