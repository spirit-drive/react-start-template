import React, { FC, useEffect, useState } from 'react';
import { Cost } from 'src/objects/mainObjects';
import  './operationTable.css';

interface OperationTableProps {
  headers: Array <string>;
  rows: Array <Cost>;
}

export const OperationTable: FC<OperationTableProps>  = ({ headers, rows }) => {
  return (
    <table >
        <thead>
            <tr> {Array.isArray(headers) ? headers.map(header => {
            return <th>{header}</th>
          })
        : null}
        </tr>
        </thead>
        <tbody> 
          {Array.isArray(rows) ? rows.map(row => {
            return <tr> 
            <td>{row.name}</td>  
            <td>{row.amount}</td>   
            <td>{row.category.name}</td>                
          </tr>
          })
        : null}         
        </tbody>
    </table>
  )
}