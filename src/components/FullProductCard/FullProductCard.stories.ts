import type { Meta, StoryObj } from '@storybook/react';

import { FullProductCard } from './FullProductCard';

const meta: Meta<typeof FullProductCard> = {
  title: 'FullProductCard',
  component: FullProductCard,
};

export default meta;
type Story = StoryObj<typeof FullProductCard>;

export const Primary: Story = {};
