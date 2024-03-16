import type {Meta, StoryObj} from '@storybook/react';
import { SingUpForm } from '../screens/authScreen/singUpForm/singUpForm';
import { AuthForm } from '../components/authForm/authForm';

const meta: Meta<typeof AuthForm> = {
  component: SingUpForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AuthForm>;

export const Basic: Story = { args: {} };