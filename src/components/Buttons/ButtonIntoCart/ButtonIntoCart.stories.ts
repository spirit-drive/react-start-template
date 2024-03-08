import type { Meta } from '@storybook/react';
import { ButtonIntoCart } from './ButtonIntoCart';

const meta: Meta<typeof ButtonIntoCart> = {
  title: 'ButtonIntoCart',
  component: ButtonIntoCart,
  argTypes: {},
};

export default meta;
export const Default = {
  args: {
    count: 0,
    disabled: false,
  },
};
