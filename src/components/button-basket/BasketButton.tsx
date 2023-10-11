import React from 'react';
import cn from 'clsx';
import './button-basket.css';

interface BasketButtonProps {
  counter?: number | undefined;
}
export const BasketButton: React.FC<BasketButtonProps> = (props: BasketButtonProps) => {
  return (
    <>
      {props?.counter === 0 || props.counter === undefined ? (
        <button className={cn('basket-button')}>
          <span className={cn('basket-button-text')}>В корзину</span>
        </button>
      ) : (
        <>
          <div className={cn('basket-button-counter-container')}>
            <button className={cn('basket-button-counter')}>
              <span>-</span>
            </button>
            <div className={cn('basket-button-input')}>
              <span className={cn('basket-button-text')}>{props.counter}</span>
            </div>
            <button className={cn('basket-button-counter')}>
              <span>+</span>
            </button>
          </div>
        </>
      )}
    </>
  );
};
