import React from 'react';
import { formatDate } from '../../helpers';
import { Category } from '../../types';

import './index.css';

interface Props {
  amount: number;
  category: Category;
  title: string;
  description: string;
  date: Date;
}

const OperationView: React.FC<Props> = ({ amount, category, title, description, date }) => {
  console.log(`Сумма: ${amount} руб`);

  return (
    <div className="opeation-view">
      <div className="opeation-view__header">
        <h2>{title}</h2>
        <button>Редактировать</button>
      </div>
      <div className="opeation-view__details">
        <div className="opeation-view__amount">
          <b>Сумма:</b> {amount} руб.
        </div>
        <div className="opeation-view__category">
          <b>Категория:</b> {category}
        </div>
        <div className="opeation-view__description">
          <b>Описание:</b> {description}
        </div>
        <div className="opeation-view__date">
          <b>Дата:</b> {formatDate(date)}
        </div>
      </div>
    </div>
  );
};

export default OperationView;
