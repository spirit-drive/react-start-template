import React from 'react';
import { NamesColumns } from './models';

import './style.css';

/**
 *  Ячейка таблицы
 */
const TableRow = ({ itemRow }: { itemRow: NamesColumns[] }) => (
  <tr>
    {itemRow.map((item) => (
      <td key={item}>{item}</td>
    ))}
    <td>
      <a title="Детали операции">{NamesColumns.Details}</a>
    </td>
  </tr>
);

export default TableRow;
