import React, { FC } from 'react';
import './operation.scss';
import { ShortOperationTypes } from './operationsTypes';

interface IPropsShortOperationTypes {
    value : ShortOperationTypes
}
// eslint-disable-next-line react/prop-types
export const ShortOperation: FC<IPropsShortOperationTypes> = ({...props}) => {
    return (
        <div className="operation dfc short">
            <div className="operation__header df">
                <div className="operation__info dfc">
                    <h3>{props.value.name}</h3>
                    <span>{props.value.categoryName}</span>
                </div>
                <div className="operation__amount">{props.value.amount}</div>
            </div>
            <div className="operation__description">{props.value.shortDescription}</div>
        </div>
    );
};
