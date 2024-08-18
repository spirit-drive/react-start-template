import { Meta } from '@storybook/react';
import { ThemeToggler } from './ThemeToggler';
import { Theme } from '../../../app/providers/theme-provider/lib/theme';
import React from 'react';
import 'src/app/index.css';

const meta: Meta<typeof ThemeToggler> = {
  title: 'Theme toggler',
  component: ThemeToggler,
  tags: ['autodocs'],
  decorators: [(Story) => <Theme>{Story()}</Theme>],
};

export default meta;

export const Default = {
  args: {},
};
