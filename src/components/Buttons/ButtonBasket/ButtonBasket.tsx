import React, { FC, ReactElement, useState } from 'react';
import './ButtonBasket.scss';

interface IButtonBasket {
  count?: number;
  onClick?: () => void;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export const ButtonBasket: FC<IButtonBasket> = ({ count = 0, onClick, onIncrement, onDecrement }): ReactElement => {

  return (
    <div className="add2cart">
      <div className="input-group">
        {count > 0 ? (
          <>
            <button className="btn" onClick={onDecrement}>
              <i className="fa-sharp fa-solid fa-minus"></i>
            </button>
            <input className="form-control" type="text" value={count} disabled />
            <button className="btn" onClick={onIncrement}>
              <i className="fa-sharp fa-solid fa-plus"></i>
            </button>
          </>
        ) : (
          <button className="btn" onClick={onClick}>
            <i className="fas fa-shopping-cart"></i> 
          </button>
        )}
      </div>
    </div>
  );
};
