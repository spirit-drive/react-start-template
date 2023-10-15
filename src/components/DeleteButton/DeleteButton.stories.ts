import type { Meta, StoryObj } from '@storybook/react';

import { Delete } from './DeleteButton';

const meta: Meta<typeof Delete> = {
    title: 'Online-store/Delete button',
    component: Delete,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Delete>;

export const Default: Story = {};
