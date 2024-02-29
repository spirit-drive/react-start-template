import React from 'react';
import './ButtonIntoCart.scss';

type ButtonIntoCartProps = {
  count?: number;
};

export const ButtonIntoCart: React.FC<ButtonIntoCartProps> = ({ count = 0 }) => {
  return (
    <div className="button">
      {count === 0 ? (
        <span>В корзину</span>
      ) : (
        <span>
          Количество <button>+</button> {count} <button>-</button>
        </span>
      )}
    </div>
  );
};
