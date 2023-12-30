import React, { ReactElement, useState } from 'react';
import style from './ToCart.module.sass';
import cn from 'clsx';

type LayoutProps = {
  className?: string;
  count?: number;
};

export function ToCart({ className, count = 0 }: LayoutProps): ReactElement {
  const [cnt, setCnt] = useState(count);

  const handlePlusClick = () => setCnt((prev) => prev + 1);
  const handleMinusClick = () => setCnt((prev) => (prev <= 0 ? 0 : prev - 1));

  const isEmpty = cnt === 0;
  return (
    <div className={cn(style.root, className)}>
      {isEmpty ? (
        <button className={cn(style.toCart)} onClick={handlePlusClick}>
          В корзину
        </button>
      ) : (
        <div>
          <button className={cn(style.plus)} onClick={handlePlusClick}>
            +
          </button>
          <input className={cn(style.count)} type="text" value={cnt} />
          <button className={cn(style.minus)} onClick={handleMinusClick}>
            -
          </button>
        </div>
      )}
    </div>
  );
}
