import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import ModalController from '../../components/ModalController/ModalController';
import ProductList from '../../components/ProductList/ProductList';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <ModalController />
      <ProductList />
    </>
  );
};

export default Layout;
