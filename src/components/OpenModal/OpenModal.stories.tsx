import type { Meta, StoryObj } from '@storybook/react';

import { OpenModal } from './OpenModal';

const meta: Meta<typeof OpenModal> = {
    title: 'Open modal',
    component: OpenModal,
};

export default meta;

type Story = StoryObj<typeof OpenModal>;

export const Default: Story = {};
