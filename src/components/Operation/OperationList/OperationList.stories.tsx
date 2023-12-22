import type { Meta } from '@storybook/react';
import { OperationList } from './OperationList';

const meta: Meta<typeof OperationList> = {
  title: 'Компоненты/Operation/OperationList',
  component: OperationList,
  tags: ['autodocs'],
};

export default meta;

export const Список_операций_1 = {
  args: {
    operations: [
      {
        id: 1,
        desc: 'Магазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин Пятёрочка',
        amount: 56,
        category: { id: 1, name: 'Продукты', photo: '' },
        type: 'Расход',
      },
      {
        id: 2,
        desc: 'Магазин Магнит',
        amount: 44,
        category: { id: 1, name: 'Продукты', photo: '' },
        type: 'Расход',
      },
      {
        id: 3,
        desc: 'Получил аванс на работе',
        amount: 10000,
        category: { id: 4, name: 'Зарплата', photo: '' },
        type: 'Доход',
      },
      {
        id: 4,
        desc: 'Газпромнефть',
        amount: 1000,
        category: { id: 2, name: 'Бензин', photo: '' },
        type: 'Расход',
      },
      {
        id: 5,
        desc: 'Звёздные войны',
        amount: 145,
        category: { id: 3, name: 'Развлечения', photo: '' },
        type: 'Расход',
      },
      {
        id: 6,
        desc: 'Сделал сайт',
        amount: 110000,
        category: { id: 5, name: 'Халтура', photo: '' },
        type: 'Доход',
      },
      {
        id: 7,
        desc: 'Магазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин Пятёрочка',
        amount: 56,
        category: { id: 1, name: 'Продукты', photo: '' },
        type: 'Расход',
      },
      {
        id: 8,
        desc: 'Магазин Магнит',
        amount: 44,
        category: { id: 1, name: 'Продукты', photo: '' },
        type: 'Расход',
      },
      {
        id: 9,
        desc: 'Получил аванс на работе',
        amount: 10000,
        category: { id: 4, name: 'Зарплата', photo: '' },
        type: 'Доход',
      },
      {
        id: 10,
        desc: 'Газпромнефть',
        amount: 1000,
        category: { id: 2, name: 'Бензин', photo: '' },
        type: 'Расход',
      },
      {
        id: 11,
        desc: 'Звёздные войны',
        amount: 145,
        category: { id: 3, name: 'Развлечения', photo: '' },
        type: 'Расход',
      },
      {
        id: 12,
        desc: 'Сделал сайт',
        amount: 110000,
        category: { id: 5, name: 'Халтура', photo: '' },
        type: 'Доход',
      },
    ],
  },
};
