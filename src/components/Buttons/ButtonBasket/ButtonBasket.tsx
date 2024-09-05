import React, { FC, ReactElement } from 'react';
import './ButtonBasket.scss';

interface IButtonBasket {
  counter?: number;
}

export const ButtonBasket: FC<IButtonBasket> = ({ counter = 0 }): ReactElement => {
  return (
    <div className="add2cart">
      <div className="input-group">
        {counter > 0 ? (
          <>
            <button className="btn">
              <i className="fa-sharp fa-solid fa-minus"></i>
            </button>
            <input className="form-control" type="text" value={counter} disabled />
            <button className="btn">
              <i className="fa-sharp fa-solid fa-plus"></i>
            </button>
          </>
        ) : (
          <button className="btn">
            <i className="fas fa-shopping-cart"></i> Add to cart
          </button>
        )}
      </div>
    </div>
  );
};
