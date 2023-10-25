import React from 'react';
import { NamesColumns } from '../budget/models';
import './style.css';

/**
 *  Заголовки столбцов таблицы
 */
const BudgetTableThead = () => (
  <thead>
    <tr>
      <th>{NamesColumns.Name}</th>
      <th>{NamesColumns.Category}</th>
      <th>{NamesColumns.Description}</th>
      <th>{NamesColumns.Amount}</th>
      <th />
    </tr>
  </thead>
);

export default BudgetTableThead;
