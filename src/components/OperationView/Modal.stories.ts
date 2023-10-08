import type { Meta } from '@storybook/react';

import OperationView from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof OperationView> = {
  title: 'Example/OperationView',
  component: OperationView,
  tags: ['autodocs'],
  argTypes: {
    amount: { control: 'number' },
    category: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    date: { control: 'text' },
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MainOperationView = {
  args: {
    amount: 100.0,
    category: 'Покупки',
    title: 'Покупка продуктов',
    description: 'Покупка продуктов в местном супермаркете.',
    date: '2023-09-30',
  },
};
