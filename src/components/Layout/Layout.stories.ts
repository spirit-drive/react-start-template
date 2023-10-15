import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
    title: 'Layout',
    component: Layout,
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {};
