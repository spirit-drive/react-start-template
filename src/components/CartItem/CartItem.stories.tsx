import React from 'react';
import { Story, Meta } from '@storybook/react';

import CartItem, { CartItemProps } from './CartItem';

export default {
  title: 'components/CartItem',
  component: CartItem,
} as Meta;

const Template: Story<CartItemProps> = (args) => <CartItem {...args} />;

export const SampleItem = Template.bind({});
SampleItem.args = {
  title: 'Сырок Б.Ю Александров',
};
