import React from 'react';

export type ButtonBasketProps = {
  productCount: number;
} & React.HTMLAttributes<HTMLButtonElement>;

export type ModalWindowProps = {
  text: string;
  toggleModal: () => void;
};

export type DisplayProductProps = {
  key: number;
  coast: number;
  category: string;
  img: string;
  title: string;
  description: string;
};

export type DisplayProductBasketProps = Omit<DisplayProductProps, 'category' | 'description'> & {
  shortDescription: string;
};

export type ShortDisplayProductProps = DisplayProductBasketProps;
