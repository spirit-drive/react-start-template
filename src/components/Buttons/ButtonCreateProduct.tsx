import React from 'react';
import classNames from './button.module.css';
import clsx from 'clsx';
import { createRandomProduct } from '../../homeworks/ts1/3_write';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/productCatalogSlice';

export const ButtonCreateProduct = () => {
  const dispatch = useDispatch();

  const handleRandomProduct = () => {
    const randomProduct = createRandomProduct('now');
    const validProduct = {
      id: randomProduct.id,
      name: randomProduct.name,
      photo: 'http://placehold.it/50x50',
      desc: randomProduct.desc,
      createdAt: randomProduct.createdAt,
      updatedAt: randomProduct.updatedAt,
      key: randomProduct.id,
      price: randomProduct.price,
      category: randomProduct.category.name
    }
    dispatch(addProduct(validProduct))
  };

  return (
    <button className={clsx(classNames.button)} onClick={handleRandomProduct}>
      Create product
    </button>
  );
};
