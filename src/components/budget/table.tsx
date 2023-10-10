import React from 'react';
import TableThead from './table-thead';
import TableRowItem from './table-row';
import './style.css';
import { TBudget, TTableList, NamesColumns } from './models';

interface BudgetListProps {
  /** список доходов/расходов */
  data: TBudget[];
}

/**
 * Таблица доходов/расходов
 */
const Table = ({ data }: BudgetListProps) => (
  <table className="table">
    <TableThead />

    <tbody>
      {data.map((item: TTableList) => (
        <React.Fragment key={item.id}>
          <TableRowItem itemRow={item.name as NamesColumns[]} />
        </React.Fragment>
      ))}
    </tbody>
  </table>
);

export default Table;
