import React, { FC, useEffect, useState } from 'react';
import { Cost } from '../../objects/mainObjects';
import './operationTable.css';

interface OperationTableProps {
  headers: Array<string>;
  rows: Array<Cost>;
}

export const OperationTable: FC<OperationTableProps> = ({ headers, rows }) => {
  return (
    <table>
      <thead>
        <tr>
          {' '}
          {Array.isArray(headers)
            ? headers.map((header) => {
                return <th key={header}>{header}</th>;
              })
            : null}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(rows)
          ? rows.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.amount}</td>
                  <td>{row.category.name}</td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
};
