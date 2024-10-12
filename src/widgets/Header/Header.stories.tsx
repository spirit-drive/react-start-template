import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { Providers } from 'src/app/providers';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <Providers>
      <Header />
    </Providers>
  ),
};
