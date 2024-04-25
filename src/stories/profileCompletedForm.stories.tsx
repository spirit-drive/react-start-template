import type { Meta, StoryObj } from '@storybook/react';

import { ProfileForm } from '../components/profileForm/profileForm';
import { ProfileCompletedForm } from '../screens/profileScreen/ui/profileCompletedForm';

const meta: Meta<typeof ProfileForm> = {
  component: ProfileCompletedForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProfileForm>;

export const Basic: Story = { args: {} };
