import React, { FC } from 'react';
import './operationShort.css';

interface OperationShortProps {
  amount: number;
  name: string;
  categoryName: string;
  description: string;
}

export const OperationShort: FC<OperationShortProps> = ({ amount, name, categoryName, description }) => {
  return (
    <div className="operationShort">
      <h3>Параметры операции (кратко)</h3>
      <p>
        <strong>Стоимость:</strong>
        <div>{amount}</div>
      </p>
      <p>
        <strong>Название:</strong>
        <div>{name}</div>
      </p>
      <p>
        <strong>Категория:</strong>
        <div>{categoryName}</div>
      </p>
      <p>
        <strong>Описание:</strong>
        <div className="textShort">{description}</div>
      </p>
    </div>
  );
};
