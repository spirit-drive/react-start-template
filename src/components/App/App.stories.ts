import type { Meta } from '@storybook/react';
import App from './App';

const meta: Meta<typeof App> = {
  title: 'App',
  component: App,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
export const Default = {
  args: {
    children: 'content',
  },
};
