import React, { FC, ReactElement, useState } from 'react';
import './ButtonBasket.scss';

interface IButtonBasket {
  counter?: number;
}

export const ButtonBasket: FC<IButtonBasket> = ({ counter = 0 }): ReactElement => {
  const [count, setCounter] = useState<number>(counter);
  const up = () => {
    setCounter(count + 1);
  };
  const down = () => {
    if (count > 0) setCounter(count - 1);
  };
  return (
    <div className="add2cart">
      <div className="input-group">
        {counter > 0 ? (
          <>
            <button className="btn" onClick={down}>
              <i className="fa-sharp fa-solid fa-minus"></i>
            </button>
            <input className="form-control" type="text" value={count} disabled />
            <button className="btn" onClick={up}>
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
