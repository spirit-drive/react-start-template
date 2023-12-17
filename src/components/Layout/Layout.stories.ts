import type { Meta } from '@storybook/react';

import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {},
};
