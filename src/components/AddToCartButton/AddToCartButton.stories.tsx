import React from 'react';
import { Meta, Story } from '@storybook/react';

import AddToCartButton, { AddToCartButtonProps } from './AddToCartButton';

export default {
  title: 'components/AddToCartButton',
  component: AddToCartButton,
} as Meta;

const Template: Story<AddToCartButtonProps> = (args) => <AddToCartButton {...args} />;

export const ZeroCount = Template.bind({});
ZeroCount.args = {
  count: 0,
};

export const PositiveCount = Template.bind({});
PositiveCount.args = {
  count: 3,
};
