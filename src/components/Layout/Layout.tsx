import React from 'react';
import { Header } from '../Header';
import { Modal } from '../Modal';
import { ButtonIntoCart } from '../ButtonIntoCart';
import { SimpleButton } from '../SimpleButton/SimpleButton';
import { ItemCard } from '../ItemCard';

export const Layout = () => {
  return (
    <>
      <Header />
      <ItemCard />
      <Modal />
      <ButtonIntoCart count={2} />
      <ButtonIntoCart count={0} />
      <SimpleButton />
    </>
  );
};
