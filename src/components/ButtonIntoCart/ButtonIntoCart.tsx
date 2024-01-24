import React from 'react';
import './ButtonIntoCart.scss';

export const ButtonIntoCart = ({ count = 0 }: { count: number }) => {
  return (
    <div className="button">
      {count > 0 ? (
        <span>В корзину</span>
      ) : (
        <span>
          Количество <button>+</button> {count} <button>-</button>
        </span>
      )}
    </div>
  );
};
