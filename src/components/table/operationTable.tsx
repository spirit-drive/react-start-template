import React, { FC, useState } from 'react';
import './operationTable.css';
import { Operation } from '../../graphql.types';
import { profileActions, profileSelector } from '../../entities/profileSlice';
import { useSelector } from 'react-redux';
import { Modal } from '../modal/modal';
import { UpdateOperationForm } from '../../screens/operationScreen/ui/update/updateOperationForm';
import { createPortal } from 'react-dom';

interface OperationTableProps {
  headers: Array<string>;
  rows?: Array<Operation>;
}

export const OperationTable: FC<OperationTableProps> = ({ headers, rows }) => {
  const { costList } = useSelector(profileSelector);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [childUpdate, setChildUpdate] = useState<JSX.Element>();

  function updateOperation(id: string): void {
    setChildUpdate(<UpdateOperationForm id={id} onClose={setModalUpdate} />);
    setModalUpdate(true);
  }

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
        {costList.length > 0
          ? costList.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.amount}</td>
                  <td>{row.category.name}</td>
                  <button onClick={() => updateOperation(row.id)}>Редактировать</button>
                </tr>
              );
            })
          : null}
      </tbody>
      {modalUpdate ? createPortal(<Modal setActive={setModalUpdate}>{childUpdate}</Modal>, document.body) : ''}
    </table>
  );
};
