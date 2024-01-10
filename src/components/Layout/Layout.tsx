import React, { FC } from 'react';
import Header from 'src/components/Header/Header';
import ModalController from 'src/components/ModalController/ModalController';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <ModalController />
    </>
  );
};

export default Layout;
