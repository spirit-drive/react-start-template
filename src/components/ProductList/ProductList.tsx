import React from 'react';
import classNames from './productList.module.css';
import clsx from 'clsx';
import { useStore } from '../../helper/useStore';
import DisplayProduct from '../../components/DisplayProduct/DisplayProduct';
import { DisplayProductProps } from '../../types';
import { useIntersectionObserver } from '../../helper/useIntersectionObserver';

const ProductList = () => {
  const { product } = useStore();
  useIntersectionObserver();

  return (
    <section className={clsx(classNames.productList)}>
      {product.map((currentProduct: DisplayProductProps) => {
        return (
          <DisplayProduct
            key={currentProduct.key}
            coast={currentProduct.coast}
            category={currentProduct.category}
            img={currentProduct.img}
            title={currentProduct.title}
            description={currentProduct.description}
          />
        );
      })}
    </section>
  );
};

export default ProductList;
