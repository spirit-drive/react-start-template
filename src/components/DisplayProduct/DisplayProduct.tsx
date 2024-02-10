import React, { FC } from 'react';
import classNames from './displayProduct.module.css';
import clsx from 'clsx';
import ButtonBasket from '../ButtonBasket/ButtonBasket';
import { DisplayProductProps } from '../../types';

const DisplayProduct: FC<DisplayProductProps> = ({ coast, category, img, title, description }) => {
  return (
    <div className={clsx(classNames.DisplayProductWrapper)}>
      <h3 className={clsx(classNames.title)}>{title}</h3>
      <div className={clsx(classNames.about)}>
        <div className={clsx(classNames.imgContainer)}>
          <img src={img} alt="productImg" />
        </div>
        <div className={clsx(classNames.info)}>
          <p className={clsx(classNames.category)}>Категория: {category}</p>
          <p className={clsx(classNames.description)}>{description}</p>
          <div className={clsx(classNames.buyProduct)}>
            <span>{coast}&#8381;</span>
            <ButtonBasket productCount={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
