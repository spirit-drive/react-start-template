import type { Meta, StoryObj } from '@storybook/react';
import { Category, Cost } from '../objects/mainObjects';

import { OperationTable } from '../components/table/operationTable';

const meta: Meta<typeof OperationTable> = {
  component: OperationTable,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof OperationTable>;
const headers = ['Название', 'Стоимость', 'Категория'];
const category = { id: '1', name: 'categoryTest' } as Category;
const rows = [{ name: 'test', amount: 5, category: category } as Cost];
export const Basic: Story = { args: { headers: headers, rows: rows } };
