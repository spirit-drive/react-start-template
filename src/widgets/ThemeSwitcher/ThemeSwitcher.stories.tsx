import type { Meta } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import React from 'react';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
};

export default meta;

export const Primary = {
  render: () => (
    <>
      <ThemeSwitcher />
    </>
  ),
};
