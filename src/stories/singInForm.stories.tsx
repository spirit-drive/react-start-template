import type { Meta, StoryObj } from '@storybook/react';
import { SingInForm } from '../screens/authScreen/singInForm/singInForm';
import { AuthForm } from '../components/authForm/authForm';

const meta: Meta<typeof AuthForm> = {
  component: SingInForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AuthForm>;

export const Basic: Story = { args: {} };
