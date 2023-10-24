import React from 'react';
import { formatDate } from '../../helpers';
import { Category } from '../../types';
import { Button, ButtonVariant } from '../Button';

import s from './index.module.scss';

interface Props {
  amount: number;
  category: Category;
  title: string;
  description: string;
  date: Date;
}

const OperationView: React.FC<Props> = ({ amount, category, title, description, date }) => {
  return (
    <div className={s['opeation-view']}>
      <div className={s['opeation-view__header']}>
        <h2>{title}</h2>
        <Button variant={ButtonVariant.primary}>Редактировать</Button>
      </div>
      <div className={s['opeation-view__details']}>
        <div className={s['opeation-view__amount']}>
          <b>Сумма:</b> {amount} руб.
        </div>
        <div className={s['opeation-view__category']}>
          <b>Категория:</b> {category}
        </div>
        <div className={s['opeation-view__description']}>
          <b>Описание:</b> {description}
        </div>
        <div className={s['opeation-view__date']}>
          <b>Дата:</b> {formatDate(date)}
        </div>
      </div>
    </div>
  );
};

export default OperationView;
