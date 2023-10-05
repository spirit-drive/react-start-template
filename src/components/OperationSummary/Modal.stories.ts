import type { Meta } from '@storybook/react';

import OperationSummary from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof OperationSummary> = {
  title: 'Example/OperationSummary',
  component: OperationSummary,
  tags: ['autodocs'],
  argTypes: {
    amount: { control: 'number' },
    category: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MainOperationSummary = {
  args: {
    amount: 50.0,
    category: 'Покупки',
    title: 'Покупка продуктов',
    description: 'Покупка продуктов в местном супермаркете.',
  },
};
