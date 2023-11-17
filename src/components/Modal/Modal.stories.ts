import type { Meta, StoryObj } from '@storybook/react';

import { MemoizedModal } from './Modal';

const meta: Meta<typeof MemoizedModal> = {
    title: 'Modal',
    component: MemoizedModal,
    // tags: ['autodocs'],
    argTypes: {
        visible: { control: 'boolean' },
        children: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof MemoizedModal>;

export const VisibleModal: Story = {
    args: {
        visible: true,
        children: "I'm modal",
    },
};

export const NonVisibleModal: Story = {
    args: {
        visible: false,
        children: "I'm modal",
    },
};
