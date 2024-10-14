import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitchBtn as LangSwitchBtnComponent } from '../UI/LangSwitchBtn/LangSwitchBtn';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof LangSwitchBtnComponent> = {
  title: 'Buttons/LangSwitchBtn',
  component: LangSwitchBtnComponent,
  tags: ['autodocs'],
};

export default meta;

export const LangSwitchBtn: Story = {};
