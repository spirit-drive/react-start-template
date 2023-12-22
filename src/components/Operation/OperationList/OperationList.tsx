import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Operation } from '../types';
import { ShortOperationDisplay } from '../ShortOperationDisplay';

type OperationList = {
  /** Массив объектов. В каждом объекте информация об одной операции */
  operations: Operation[];
};

let id = 13;

function createRandomOperation(operations: Operation[]): Operation {
  function getId() {
    return id++;
  }

  const operation = Object.create(operations[Math.floor(Math.random() * operations.length)]);
  operation.id = getId();
  return operation;
}

function scrollToElement() {
  const rows = document.getElementsByClassName('tm-table-flex__body')[0].getElementsByClassName('tm-table-flex__row');
  const lastRow = rows[rows.length - 1];
  lastRow.scrollIntoView();
}

/**
 * Компонент отображения списка операций. Содержит сумму операции, название категории, название, описание (обрезанно) - все это он получает из пропсов
 */
export const OperationList: FC<OperationList> = ({ operations }): ReactElement => {
  const [operationsArray, setOperationArray] = useState(operations);
  useEffect(scrollToElement, [operationsArray]);

  function clickHandler() {
    setOperationArray([...operationsArray, createRandomOperation(operations)]);
  }

  return (
    <div id="operationList" className="container mtb-3">
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
            {operationsArray.map(function (operation) {
              const { id, amount, category, type, desc } = operation;
              return (
                <ShortOperationDisplay key={id} id={id} amount={amount} category={category} type={type} desc={desc} />
              );
            })}
          </div>
          <div className="tm-table-flex__foot">
            <div className="tm-table-flex__row">
              <div className="tm-table-flex__cell">Итог</div>
              <div className="tm-table-flex__cell"></div>
              <div className="tm-table-flex__cell"></div>
              <div className="tm-table-flex__cell"></div>
              <div className="tm-table-flex__cell">
                <button id="showMoreButton" onClick={clickHandler}>
                  Показать ещё
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
