import React from 'react';
import './ButtonIntoCart.module.scss';

type ButtonIntoCartProps = {
  count?: number;
  disabled?: boolean;
};

export const ButtonIntoCart: React.FC<ButtonIntoCartProps> = ({ count = 0, disabled = false }) => {
  return (
    <div className={disabled ? `disabled` : ``}>
      {count == 0 ? (
        <div className="button-into-cart buy">
          <span>В корзину</span>
        </div>
      ) : (
        <div className="button-into-cart count">
          <span>
            Количество <button>+</button> {count} <button>-</button>
          </span>
        </div>
      )}
    </div>
  );
};
