import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;
export const Default: Story = {
    args: {
        //visible: true,
        children: 'Модалка',
    },
};
