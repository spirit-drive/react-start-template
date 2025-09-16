import React, { FC } from 'react';
import cn from 'clsx';
import './edit-operation.css';

export interface EditOperationProps {
    sum?: number;            // сумма операции
    category?: string;       // название категории
    name?: string;           // название
    description?: string;    // описание
    date?: Date;             // дата
};

/**
 * Компонент полного отображения операции и редиктирования
 */
const EditOperation: FC<EditOperationProps> = ({ sum, category, name, description, date }) => {
  return (
    <div className={cn('edit-operation')}>
        <div className={cn('short-string', 'category')}>{category}</div>
        <div className={cn('edit-header')}>
            <div className={cn('edit-container', 'sum')}>{sum}</div>
            <div className={cn('edit-container', 'short-string', 'date')}>{date?.toDateString()}</div>
        </div>

        <div className={cn('edit-container')}>
            <div className={cn('edit-container', 'short-string', 'name')}>{name}</div>
            <div className={cn('edit-container', 'short-string', 'desc')}>{description}</div>
        </div>

        <div className={cn('edit-footer')}>
            <button
                type='button'
                className={cn('edit-button')}
                >Ред-ть</button>
        </div>
    </div>
  );
};

export default EditOperation;