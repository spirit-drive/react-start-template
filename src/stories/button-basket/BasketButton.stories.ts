import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { BasketButton } from '../../components/button-basket/BasketButton';

const meta: Meta<typeof BasketButton> = {
  title: 'BasketButton',
  component: BasketButton,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Counter = {
  args: {
    counter: 1
  },
};

export const ToBasket = {
  args: {
    counter: 0
  },
};
