import type { Meta, StoryObj } from '@storybook/react';

import { BasketButton } from './BasketButton';

const meta: Meta<typeof BasketButton> = {
  title: 'Button',
  component: BasketButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
