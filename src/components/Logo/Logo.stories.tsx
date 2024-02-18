import type { Meta,StoryObj } from '@storybook/react';
import  { Logo } from './Logo';


const meta: Meta<typeof Logo> = {
  title: 'Logoneus',
  component: Logo
};

export default meta;

type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    size: true,
    label: 'Logoneus',
  },
};

