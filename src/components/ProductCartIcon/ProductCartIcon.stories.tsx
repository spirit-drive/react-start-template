import type { Meta, StoryObj } from '@storybook/react';

import { ProductCartIcon } from './ProductCartIcon';
import React from 'react';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductCartIcon> = {
  title: 'Product Cart Buttoneus',
  component: ProductCartIcon
};




export default meta;

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    count: 0,
  },
};

