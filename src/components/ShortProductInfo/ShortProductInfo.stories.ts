import type { Meta, StoryObj } from '@storybook/react';

import { ShortProductInfo } from './ShortProductInfo';

const meta: Meta<typeof ShortProductInfo> = {
    title: 'Online-store/Short product info',
    component: ShortProductInfo,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ShortProductInfo>;

export const Default: Story = {};
