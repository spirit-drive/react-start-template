import type { Meta } from '@storybook/react';

import { Logo } from './Logo';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Logo> = {
  title: 'Компоненты/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Store = {
  args: {
    primary: true,
    label: 'E-Shop',
  },
};

export const Journal = {
  args: {
    label: 'Журнал доходов и расходов',
  },
};
