import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'src/helper/useTheme';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ThemeSwitch> = {
  component: ThemeSwitch,
};

type Story = StoryObj<typeof ThemeSwitch>;

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
