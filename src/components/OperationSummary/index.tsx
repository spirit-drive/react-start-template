import React from 'react';
import { Category } from '../../types';

import s from './index.module.scss';

interface Props {
  amount: number;
  category: Category;
  title: string;
  description: string;
}
const OperationSummary: React.FC<Props> = ({ amount, category, title, description }) => {
  return (
    <div className={s['operation-summary']}>
      <div className={s['operation-summary__amount']}>Сумма: {amount} руб.</div>
      <div className={s['operation-summary__category']}>Категория: {category}</div>
      <div className={s['operation-summary__title']}>Название: {title}</div>
      <div className={s['operation-summary__description']}>Описание: {description}</div>
    </div>
  );
};

export default OperationSummary;
