import type { Meta, StoryObj } from '@storybook/react';

import { ShortProductCard } from './ShortProductCard';

const meta: Meta<typeof ShortProductCard> = {
  title: 'ShortProductCard',
  component: ShortProductCard,
};

export default meta;
type Story = StoryObj<typeof ShortProductCard>;

export const Primary: Story = {};
