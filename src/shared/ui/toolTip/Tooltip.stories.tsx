import type { Meta, StoryObj } from '@storybook/react';
import { TooltipList } from './TooltipList';

const meta: Meta<typeof TooltipList> = {
    title: 'shared/TooltipList',
    component: TooltipList,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TooltipList>;
export const Default: Story = {
};