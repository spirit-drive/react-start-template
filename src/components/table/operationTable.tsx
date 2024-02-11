import React, { FC, useEffect, useState } from 'react';
import { Cost } from 'src/objects/mainObjects';
import  './operationTable.css';

export interface OperationTableProps {
  headers: Array <string>;
  rows: Array <Cost>;
}



export const OperationTable: FC<OperationTableProps>  = ({ headers, rows }) => {

  return (
    <table >
        <thead>
                <tr>
                    {headers.map(header => 
                        <th>{header}</th>
                    )}
                </tr>
        </thead>
        <tbody>
            {rows.length == 0 ? <tr></tr> : rows.map(row => 
                    <tr> 
                      <td>{row.name}</td>  
                      <td>{row.amount}</td>   
                      <td>{row.category.name}</td>                
                    </tr>
            )}            
        </tbody>
    </table>
  )
}

export default OperationTable