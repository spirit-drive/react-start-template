import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../components/toggles/toggle';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Basic: Story = { args: {} };