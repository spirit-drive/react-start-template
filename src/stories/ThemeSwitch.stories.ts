import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitchBtn as ThemeSwitchBtnComponent } from '../UI/ThemeSwitchBtn/ThemeSwitch';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof ThemeSwitchBtnComponent> = {
  title: 'Example/ThemeSwitchBtn',
  component: ThemeSwitchBtnComponent,
  tags: ['autodocs'],
};

export default meta;

export const ThemeSwitchBtn: Story = {
  args: {
    isDark: false,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#ccc' }],
    },
  },
};
