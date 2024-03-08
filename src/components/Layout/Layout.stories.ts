import type { Meta } from '@storybook/react';
import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Layout',
  component: Layout,
};

export default meta;
export const Default = {
  args: {
    children: 'content',
  },
};
