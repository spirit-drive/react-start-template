import type { Meta } from '@storybook/react';

import { AddToCartButton } from './AddToCartButton';

const meta: Meta<typeof AddToCartButton> = {  
  title: 'Компоненты/AddToCartButton',
  component: AddToCartButton,
  tags: ['autodocs'],
  argTypes: {
    counter: {control: "number"},
  },
};

export default meta;

export const Счётчик_равен_нулю = {
  args: {
    counter: 0
  },
};

export const Счётчик_меньше_нуля = {
  args: {
    counter: -1
  },
};

export const Счётчик_больше_нуля = {
  args: {
    counter: 3
  },
};