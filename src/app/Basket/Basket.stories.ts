import type { Meta, StoryObj } from '@storybook/react';

import Basket from './Basket';

const meta: Meta<typeof Basket> = {
  title: 'Components/Basket',
  component: Basket,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Basket>;

export const Empty: Story = {
  args: {
    count: 0,
  },
};

export const Filled: Story = {
  args: {
    count: 5,
  },
};
