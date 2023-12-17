import type { Meta } from '@storybook/react';

import { ToCart } from './ToCart';

const meta: Meta<typeof ToCart> = {
  title: 'Components/ToCart',
  component: ToCart,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Default = {
  args: {},
};
export const Zero = {
  args: {
    count: 0,
  },
};
export const GreaterThanZero = {
  args: {
    count: 5,
  },
};
