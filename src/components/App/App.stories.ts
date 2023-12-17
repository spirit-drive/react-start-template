import type { Meta } from '@storybook/react';

import { App } from './App';

const meta: Meta<typeof App> = {
  title: 'Components/App',
  component: App,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    children: 'content',
  },
};
