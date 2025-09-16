import React, { FC } from 'react';
import cn from 'clsx';
import './short-operation.css';

export interface ShortOperationProps {
    sum: number;
    category: string;
    name: string;
    description: string;
};


/**
 * Компонент краткого отображения операции
 */
const ShortOperation: FC<ShortOperationProps> = ({ sum, category, name, description }) => {
  return (
    <div className={cn('short-operation')}>
        <div className={cn('short-container')}>
            <div className={cn('short-container', 'short-string', 'category')}>{category}</div>
            <div className={cn('short-container', 'sum')}>{sum}</div>
            <div className={cn('short-container', 'short-string', 'name')}>{name}</div>
            <div className={cn('short-container', 'short-string', 'desc')}>{description}</div>
        </div>
    </div>
  );
};

export default ShortOperation;