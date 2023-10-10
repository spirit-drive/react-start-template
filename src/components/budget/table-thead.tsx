import React from 'react';
import { NamesColumns } from './models';
import './style.css';

/**
 *  Заголовки столбцов таблицы
 */
const TableThead = () => (
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

export default TableThead;
