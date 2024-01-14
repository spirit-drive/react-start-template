import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '../components/logo/logo';

const meta: Meta<typeof Logo> = {
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Basic: Story = { args: {} };
