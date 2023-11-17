import React from 'react';
import { NamesColumns } from '../budget/models';

import './style.css';
import { t } from 'i18next';

/**
 *  Ячейка таблицы
 */
const BudgetTableRow = ({ itemRow }: { itemRow: NamesColumns[] }) => (
  <tr>
    {itemRow.map((item) => (
      <td key={item}>{item}</td>
    ))}
    <td>
      <a title={t('table_title_link_details')}>{t('table_link_details')}</a>
    </td>
  </tr>
);

export default BudgetTableRow;
