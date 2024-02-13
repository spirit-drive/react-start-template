import React, { FC } from 'react';
import './operation.css';

interface OperationProps {
  amount: number;
  name: string;
  categoryName: string;
  createdAt: string;
  description?: string;
}

export const Operation: FC<OperationProps> = ({ amount, name, categoryName, description, createdAt }) => {
  return (
    <div className="operation">
      <h3>Параметры операции</h3>
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
        <strong>Дата:</strong>
        <div>{createdAt}</div>
      </p>
      <p>
        <strong>Описание:</strong>
        <div>{description}</div>
      </p>
    </div>
  );
};
