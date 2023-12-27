import React, { FC, ReactElement } from 'react';
import './ShortOperationDisplay.scss';
import { Operation } from '../types';

/**
 * Компонент краткого отображения операции. Содержит сумму операции, название категории, название, описание (обрезанно) - все это он получает из пропсов. Этот компонент используется в компоненте OperationList
 */
export const ShortOperationDisplay: FC<Omit<Operation, 'name' | 'createAt'>> = ({
  id,
  amount = 0,
  category,
  type,
  desc,
}): ReactElement => {
  const { name } = category;
  return (
    <div className="tm-table-flex__row">
      <div className="tm-table-flex__cell">{id}</div>
      <div className="tm-table-flex__cell">{amount}</div>
      <div className="tm-table-flex__cell">{name}</div>
      <div className="tm-table-flex__cell">{type}</div>
      <div className="tm-table-flex__cell">{desc}</div>
    </div>
  );
};
