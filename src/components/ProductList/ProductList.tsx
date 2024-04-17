import clsx from 'clsx';
import React from 'react';
import DisplayProduct from '../../components/DisplayProduct/DisplayProduct';
import { DisplayProductProps } from '../../types';
import classNames from './productList.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const ProductList = () => {
  const product = useSelector((store:RootState) => store.productCatalogSlice.products);
  /*
    коментарий для упрощенного тестирования функционала
    добваления карточки товара

    useIntersectionObserver(); -- добвляет товар по скролу
  */

  return (
    <section className={clsx(classNames.productList)}>
      {product.map((currentProduct: DisplayProductProps) => {
        return (
          <DisplayProduct
            key={currentProduct.key}
            id={currentProduct.id}
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
