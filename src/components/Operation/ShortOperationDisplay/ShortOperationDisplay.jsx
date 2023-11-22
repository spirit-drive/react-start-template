import React from "react";
import "./ShortOperationDisplay.sass";

export const ShortOperationDisplay = ({operation}) => {
    const {id, amount, category, type} = operation;
    return (
        <div className="tm-table-flex tm-table-flex--sticky-head tm-table-flex--sticky-foot tm-table-flex--theme-default tm-table-flex--striped-rows">
            <div className="tm-table-flex__head">
                <div className="tm-table-flex__row">
                    <div className="tm-table-flex__cell">ID</div>
                    <div className="tm-table-flex__cell">Сумма операции</div>
                    <div className="tm-table-flex__cell">Название категории</div>
                    <div className="tm-table-flex__cell">Операция</div>
                </div>
            </div>
            <div className="tm-table-flex__body">
                <div className="tm-table-flex__row">
                    <div className="tm-table-flex__cell">{id}</div>
                    <div className="tm-table-flex__cell">{amount}</div>
                    <div className="tm-table-flex__cell">{category.name}</div>
                    <div className="tm-table-flex__cell">{type}</div>
                </div>
            </div>
            <div className="tm-table-flex__foot">
                <div className="tm-table-flex__row">
                    <div className="tm-table-flex__cell">Итог</div>
                    <div className="tm-table-flex__cell"></div>
                    <div className="tm-table-flex__cell"></div>
                    <div className="tm-table-flex__cell"></div>
                </div>
            </div>
        </div>
    );
};