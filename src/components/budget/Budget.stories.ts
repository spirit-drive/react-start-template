import type { Meta, StoryObj } from '@storybook/react';

import { Budgets } from './Budgets';

import { NamesColumns, TBudgetType } from './models';

const meta: Meta<typeof Budgets> = {
  title: 'Components/Budget',
  component: Budgets,
  tags: ['autodocs'],
  argTypes: {
    data: Array<{ id: number; name: NamesColumns[] }>,
    type: TBudgetType,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Budget: Story = {
  args: {
    data: [
      { id: 1, name: ['Зарплата', 'Основное', 'Аванс на работе', '2000$'] },
      { id: 2, name: ['Подработка', 'Временное', 'Продал колёса', '300$'] },
    ],
    type: 'Income',
  },
};
