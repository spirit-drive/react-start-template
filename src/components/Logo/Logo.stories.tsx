import type { Meta } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Компоненты/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    title: {
      type: 'string',
      description: 'Заголовок логотипа',
      defaultValue: 'Store',
      options: ['Store', 'Журнал операций'],
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;

export const Логотип_магазина = {
  args: { title: 'Store' },
};

export const Логотип_журнала_операций = {
  args: { title: 'Журнал операций' },
};
