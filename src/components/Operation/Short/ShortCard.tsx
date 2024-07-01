import React, { FC, ReactElement } from 'react';
import './ShortCard.scss';
import { TypeOperation } from '../types';

export const ShortCard: FC<TypeOperation> = ({ operation }): ReactElement => {
  const { id, amount, category, type, desc } = operation;
  return (
    <div className="container mtb-3">
      <div className="operations-table-resposive">
        <div className="tm-table-flex tm-table-flex--sticky-head tm-table-flex--sticky-foot tm-table-flex--theme-default">
          <div className="tm-table-flex__head">
            <div className="tm-table-flex__row">
              <div className="tm-table-flex__cell">ID</div>
              <div className="tm-table-flex__cell">Сумма</div>
              <div className="tm-table-flex__cell">Категория</div>
              <div className="tm-table-flex__cell">Операция</div>
              <div className="tm-table-flex__cell">Описание</div>
            </div>
          </div>
          <div className="tm-table-flex__body">
            <div className="tm-table-flex__row">
              <div className="tm-table-flex__cell">{id}</div>
              <div className="tm-table-flex__cell">{amount}</div>
              <div className="tm-table-flex__cell">{category.name}</div>
              <div className="tm-table-flex__cell">{type}</div>
              <div className="tm-table-flex__cell">{desc}</div>
            </div>
          </div>
          <div className="tm-table-flex__foot">
            <div className="tm-table-flex__row">
              <div className="tm-table-flex__cell">Итог</div>
              <div className="tm-table-flex__cell"></div>
              <div className="tm-table-flex__cell"></div>
              <div className="tm-table-flex__cell"></div>
              <div className="tm-table-flex__cell"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
