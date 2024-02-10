import ButtonBasket from './ButtonBasket';
import React from 'react';
import { ButtonBasketProps } from '../../types';

export default {
  title: 'ButtonBasket',
  component: ButtonBasket,
};

const Template = (arg: ButtonBasketProps) => <ButtonBasket {...arg} />;
export const DefaultButtonBasket = Template.bind({});
DefaultButtonBasket.args = {
  productCount: 0,
};
