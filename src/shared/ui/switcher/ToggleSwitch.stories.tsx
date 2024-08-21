import type { Meta, StoryObj } from '@storybook/react';

import ToggleSwitch from './ToggleSwitch';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ToggleSwitch> = {
    title: 'shared/ToggleSwitch',
    component: ToggleSwitch,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;
export const Default: Story = {};
