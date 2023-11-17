import type { Meta } from '@storybook/react';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    menuList: Array<{ name: string }>,
  },
};

export default meta;

export const HeaderItem = {
  args: {
    menuList: [{ name: 'пункт 1' }, { name: 'пункт 2' }, { name: 'пункт 3' }],
  },
};
