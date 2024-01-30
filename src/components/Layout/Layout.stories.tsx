import type { Meta, StoryObj } from '@storybook/react';
import '../../styles/index.scss'

import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
    title: 'Shop/Layout',
    component: Layout,
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {};