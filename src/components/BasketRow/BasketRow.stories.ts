import type { Meta, StoryObj } from '@storybook/react';

import { BasketRow } from './BasketRow';

const meta: Meta<typeof BasketRow> = {
  title: 'BasketRow',
  component: BasketRow,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
