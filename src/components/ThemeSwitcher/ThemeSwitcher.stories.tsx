import type { Meta, StoryObj } from '@storybook/react';
import '../../styles/common.scss'
import '../../styles/index.scss'

import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'Shop/Switchers/ThemeSwitcher',
    component: ThemeSwitcher,
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {};