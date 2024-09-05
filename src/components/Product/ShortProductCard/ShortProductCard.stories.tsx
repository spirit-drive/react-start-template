import type { Meta } from '@storybook/react';
import { ShortProductCard } from './ShortProductCard';

const meta: Meta<typeof ShortProductCard> = {
  title: 'Компоненты/Product/ShortProductCard',
  component: ShortProductCard,
  tags: ['autodocs'],
};

export default meta;

export const Товар_1 = {
  args: {
    product: {
      id: 1,
      name: 'Ноутбук 1 Lorem ipsum dolor, sit amet consecteturProduct 1 Lorem ipsum dolor, sit amet consecteturProduct 1 Lorem ipsum dolor, sit amet consectetur',
      photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
      createAt: '01.01.2023 23:59:59',
      oldPrice: 65000,
      price: 55000,
      category: { id: 1, name: 'Ноутбуки', photo: '' },
    },
  },
};

export const Товар_2 = {
  args: {
    product: {
      id: 2,
      name: 'Ноутбук 2',
      photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
      desc: 'Lorem ipsum, dolor',
      createAt: '01.01.2023 23:59:59',
      oldPrice: '',
      price: 65000,
      category: { id: 2, name: 'Ноутбуки', photo: '' },
    },
  },
};

export const Товар_3 = {
  args: {
    product: {
      id: 3,
      name: 'Телефон 3 Lorem ipsum.',
      photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
      desc: 'Lorem ipsum',
      createAt: '01.01.2023 23:59:59',
      oldPrice: '',
      price: 100000,
      category: { id: 3, name: 'Телефоны', photo: '' },
    },
  },
};

export const Товар_4 = {
  args: {
    product: {
      id: 4,
      name: 'Телефон 4 Lorem ipsum dolor',
      photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
      createAt: '01.01.2023 23:59:59',
      oldPrice: '',
      price: '',
      category: { id: 3, name: 'Телефоны', photo: '' },
    },
  },
};

export const Товар_5 = {
  args: {
    product: {
      id: 5,
      name: 'Телефон 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consectetur',
      photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
      createAt: '01.01.2023 23:59:59',
      oldPrice: 70000,
      price: 16500,
      category: { id: 3, name: 'Телефон', photo: '' },
    },
  },
};
