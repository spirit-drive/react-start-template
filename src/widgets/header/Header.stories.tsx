import { Meta } from '@storybook/react';
import Header from './Header';
import { Theme } from 'src/app/providers/theme-provider';
import React from 'react';
import 'src/app/index.css';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [(Story) => <Theme>{Story()}</Theme>],
};

export default meta;

export const Default = {};
