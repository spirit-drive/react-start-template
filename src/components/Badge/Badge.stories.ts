import type { Meta } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  argTypes: {},
};

export default meta;
export const Default = {
  args: {
    text: 'text',
    bgColor: 'var(--blaze-orange-50)',
    color: 'var(--primary-800)',
  },
};
