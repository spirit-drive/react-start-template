import clsx from 'clsx';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductBasketListLocalStorage } from '../../helper/localStorage';
import { addToBasket } from '../../store/productBasketSlice';
import { RootState } from '../../store/store';
import { DisplayProductProps } from '../../types';
import ButtonBasket from '../ButtonBasket/ButtonBasket';
import classNames from './displayProduct.module.css';

const DisplayProduct: FC<DisplayProductProps> = ({ coast, category, img, title, description, id }) => {
  const dispatch = useDispatch();
  const productInBasket = useSelector((store: RootState) => store.productBasketSlice.productBasketList);
  const shortDescription = description;
  const handleProduct = () => {
    dispatch(addToBasket({ coast, img, title, shortDescription, id }));
    setProductBasketListLocalStorage(productInBasket);
  };
  return (
    <div className={clsx(classNames.DisplayProductWrapper)}>
      <h3 className={clsx(classNames.title)}>{title}</h3>
      <div className={clsx(classNames.about)}>
        <div className={clsx(classNames.imgContainer)}>
          <img src={img} alt="productImg" />
        </div>
        <div className={clsx(classNames.info)}>
          <p className={clsx(classNames.category)}>Категория: {category?.name}</p>
          <p className={clsx(classNames.description)}>{description}</p>
          <div className={clsx(classNames.buyProduct)}>
            <span>{coast}&#8381;</span>
            <ButtonBasket callback={handleProduct} productCount={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
