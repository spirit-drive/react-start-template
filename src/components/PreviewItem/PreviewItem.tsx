import React, { FC } from 'react';
import styles from './PreviewItem.module.scss';
import { Button } from '../button/Button';

type array = {
  operationId: string;
  total: string;
  category: string;
  operationName: string;
  description: string;
  date: string;
};

export type PreviewItemProps = {
  elementData: array;
};

export const PreviewItem: FC<PreviewItemProps> = ({ elementData, ...props }) => {
  return (
    <div className={`${styles.item}`}>
      <h1 className={`${styles.title} ${styles.df}`}>Подробности операции </h1>
      <span className={`${styles.category} ${styles.df}`}>
        {' '}
        <span className={`${styles.infoTitle}`}>Категория</span> {elementData.category}
      </span>
      <span className={`${styles.total} ${styles.df}`}>
        {' '}
        <span className={`${styles.infoTitle}`}>итог</span> {elementData.total}
      </span>
      <span className={`${styles.name} ${styles.df}`}>
        {' '}
        <span className={`${styles.infoTitle}`}>Название операции</span> {elementData.operationName}
      </span>
      <span className={`${styles.date} ${styles.df}`}>
        {' '}
        <span className={`${styles.infoTitle}`}>Дата операции</span> {elementData.date}
      </span>
      <p className={`${styles.desc} ${styles.df}`}>
        {' '}
        <span className={`${styles.infoTitle}`}>Описание</span> {elementData.description}
      </p>
      <Button itemClass={`${styles.btn}`} buttonData={`${elementData.operationId}`}>
        редактировать
      </Button>
    </div>
  );
};
