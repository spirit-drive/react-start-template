import type { Meta } from '@storybook/react';
import '../../../index.scss';
import { ShortCard } from './ShortCard';

const meta: Meta<typeof ShortCard> = {
  title: 'Компоненты/Operation/ShortOperation',
  component: ShortCard,
  tags: ['autodocs'],
};

export default meta;

export const Операция1 = {
  args: {
    operation: {
      id: 1,
      name: 'Item1',
      desc: 'Описание позиции Item1',
      createAt: '01.01.2024 13:00:0',
      amount: 111,
      category: { id: 1, name: 'Items', photo: '' },
      type: 'Расход',
    },
  },
};

export const Операция2 = {
  args: {
    operation: {
      id: 2,
      name: 'Описание позиции Item2',
      desc: '',
      createAt: '01.01.2023 23:59:59',
      amount: 222,
      category: { id: 1, name: 'Items', photo: '' },
      type: 'Расход',
    },
  },
};
