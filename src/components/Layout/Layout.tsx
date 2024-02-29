import React from 'react';
import { Header } from '../Header';
import { Modal } from '../Modal';
import { ButtonIntoCart } from '../Buttons/ButtonIntoCart';
import { SimpleButton } from '../Buttons/SimpleButton';
import { ItemCard, ItemCardFull, ItemCardInCart } from '../ItemCard';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <ItemCard />
      <Modal />
      <ButtonIntoCart count={2} />
      <ButtonIntoCart count={0} />
      <SimpleButton />
      <ItemCardFull />
      <ItemCardInCart />
    </>
  );
};
