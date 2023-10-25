import React from 'react';
import TableThead from './BudgetTableThead';
import TableRow from './BudgetTableRow';
import './style.css';
import { TBudget, TTableList, NamesColumns } from '../budget/models';

interface BudgetListProps {
  /** список доходов/расходов */
  data: TBudget[];
}

/**
 * Таблица доходов/расходов
 */
const BudgetTable = ({ data }: BudgetListProps) => (
  <table className="table">
    <TableThead />

    <tbody>
      {data.map((item: TTableList) => (
        <React.Fragment key={item.id}>
          <TableRow itemRow={item.name as NamesColumns[]} />
        </React.Fragment>
      ))}
    </tbody>
  </table>
);

export default BudgetTable;
