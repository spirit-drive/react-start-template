import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './Basket.module.sass';

interface BasketProps {
  count: number;
}

const Basket = ({ count }: BasketProps) => {
  const { t } = useTranslation();

  return (
    <div>
      {count === 0 ? (
        <button className={s.root}>{t`components.Basket.title`}</button>
      ) : (
        <div>
          <button>+</button>
          <input type="text" value={count} readOnly />
          <button>-</button>
        </div>
      )}
    </div>
  );
};

export default Basket;
