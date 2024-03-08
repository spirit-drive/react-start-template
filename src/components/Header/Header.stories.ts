import { Meta } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
};

export default meta;

export const Default = {
  args: {
    children: 'content',
  },
};
