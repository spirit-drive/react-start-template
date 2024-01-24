import React from 'react';
import { Header } from '../Header';
import { Modal } from '../Modal';
import { ButtonIntoCart } from '../ButtonIntoCart';
import { SimpleButton } from '../SimpleButton/SimpleButton';

export const Layout = () => {
  return (
    <>
      <Header />
      <Modal />
      <ButtonIntoCart count={2} />
      <ButtonIntoCart count={0} />
      <SimpleButton />
    </>
  );
};
