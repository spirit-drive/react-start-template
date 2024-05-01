import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DisplayProduct from '../../components/DisplayProduct/DisplayProduct';
import { getProductList, Product } from '../../store/productCatalogSlice';
import { AppDispatch, RootState } from '../../store/store';
import classNames from './productList.module.css';

const ProductList = () => {
  const product = useSelector((store: RootState) => store.productCatalogSlice.products);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <section className={clsx(classNames.productList)}>
      {product.map((currentProduct: Product) => {
        return (
          <DisplayProduct
            key={currentProduct.id}
            id={currentProduct.id}
            coast={currentProduct.price}
            category={currentProduct.category}
            img={currentProduct.photo}
            title={currentProduct.name}
            description={currentProduct.desc}
          />
        );
      })}
    </section>
  );
};

export default ProductList;
