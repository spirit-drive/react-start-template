import type { Meta, StoryObj } from '@storybook/react';

import { BudgetItem } from './BudgetItem';

import { TBudgetType } from './models';

const meta: Meta<typeof BudgetItem> = {
  title: 'Components/BudgetItem',
  component: BudgetItem,
  tags: ['autodocs'],
  argTypes: {
    type: TBudgetType,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Budget: Story = {
  args: {
    type: 'Income',
  },
};
