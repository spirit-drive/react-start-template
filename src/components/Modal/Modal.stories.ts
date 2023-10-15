import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'Modal',
    component: Modal,
    // tags: ['autodocs'],
    argTypes: {
        visible: { control: 'boolean' },
        children: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Modal>;

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
