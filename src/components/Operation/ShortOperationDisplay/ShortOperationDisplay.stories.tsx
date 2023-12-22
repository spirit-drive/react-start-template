import type { Meta } from '@storybook/react';
import { ShortOperationDisplay } from './ShortOperationDisplay';

const meta: Meta<typeof ShortOperationDisplay> = {
  title: 'Компоненты/Operation/ShortOperationDisplay',
  component: ShortOperationDisplay,
  tags: ['autodocs'],
};

export default meta;

export const Операция_1 = {
  args: {
    id: 1,
    desc: 'Магазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин Пятёрочка',
    amount: 56,
    category: { id: 1, name: 'Продукты', photo: '' },
    type: 'Расход',
  },
};

export const Операция_2 = {
  args: {
    id: 2,
    desc: 'Магазин Магнит',
    amount: 44,
    category: { id: 1, name: 'Продукты', photo: '' },
    type: 'Расход',
  },
};

export const Операция_3 = {
  args: {
    id: 3,
    desc: 'Получил аванс на работе',
    amount: 10000,
    category: { id: 4, name: 'Зарплата', photo: '' },
    type: 'Доход',
  },
};

export const Операция_4 = {
  args: {
    id: 4,
    desc: 'Газпромнефть',
    amount: 1000,
    category: { id: 2, name: 'Бензин', photo: '' },
    type: 'Расход',
  },
};

export const Операция_5 = {
  args: {
    id: 5,
    desc: 'Звёздные войны',
    amount: 145,
    category: { id: 3, name: 'Развлечения', photo: '' },
    type: 'Расход',
  },
};

export const Операция_6 = {
  args: {
    id: 6,
    desc: 'Сделал сайт',
    amount: 110000,
    category: { id: 5, name: 'Халтура', photo: '' },
    type: 'Доход',
  },
};
