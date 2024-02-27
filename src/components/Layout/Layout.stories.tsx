import type { Meta,StoryObj } from '@storybook/react';
import   Layout from './Layout';


const meta: Meta<typeof Layout> = {
  title: 'Layouteus',
  component: Layout
};

export default meta;

type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    label: 'Layouteus',
  },
};

