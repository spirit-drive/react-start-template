import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from 'src/app/providers';
import Layout from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  render: () => (
    <Providers>
      <Layout />
    </Providers>
  ),
};
