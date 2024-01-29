import type { Meta, StoryObj } from '@storybook/react';
import { LocaleSwitcher } from '../components/switchers/localSwitcher';

const meta: Meta<typeof LocaleSwitcher> = {
  component: LocaleSwitcher,
};

export default meta;

type Story = StoryObj<typeof LocaleSwitcher>;

export const Basic: Story = { args: {} };