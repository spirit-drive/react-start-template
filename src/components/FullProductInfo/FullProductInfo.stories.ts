import type { Meta, StoryObj } from '@storybook/react';

import { FullProductInfo } from './FullProductInfo';

const meta: Meta<typeof FullProductInfo> = {
    title: 'Online-store/Full product info',
    component: FullProductInfo,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FullProductInfo>;

export const Default: Story = {};
