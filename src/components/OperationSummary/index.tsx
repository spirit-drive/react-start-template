import React from 'react';
import { Category } from '../../types';

import './index.css';

interface Props {
  amount: number;
  category: Category;
  title: string;
  description: string;
}
const OperationSummary: React.FC<Props> = ({ amount, category, title, description }) => {
  return (
    <div className="operation-summary">
      <div className="operation-summary__amount">Сумма: {amount} руб.</div>
      <div className="operation-summary__category">Категория: {category}</div>
      <div className="operation-summary__title">Название: {title}</div>
      <div className="operation-summary__description">Описание: {description}</div>
    </div>
  );
};

export default OperationSummary;
