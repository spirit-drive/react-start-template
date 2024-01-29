import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from '../components/layout/layout';

const meta: Meta<typeof Layout> = {
  component: Layout,
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const Basic: Story = { args: {} };
