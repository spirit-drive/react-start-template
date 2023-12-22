import type { Meta } from '@storybook/react';
import { FullProductDisplay } from './FullProductDisplay';

const meta: Meta<typeof FullProductDisplay> = {
  title: 'Компоненты/Product/FullProductDisplay',
  component: FullProductDisplay,
  tags: ['autodocs'],
};

export default meta;

export const Товар_1 = {
  args: {
    name: 'Product 1 Lorem ipsum dolor, sit amet consecteturProduct 1 Lorem ipsum dolor, sit amet consecteturProduct 1 Lorem ipsum dolor, sit amet consectetur',
    photos: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'],
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
    oldPrice: 65,
    price: 70,
    category: { id: 1, name: 'Платья', photo: '' },
  },
};

export const Товар_2 = {
  args: {
    name: 'Product 2',
    photos: ['2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '1.jpg'],
    desc: 'Lorem ipsum, dolor',
    oldPrice: 0,
    price: 65,
    category: { id: 2, name: 'Кофты', photo: '' },
  },
};

export const Товар_3 = {
  args: {
    name: 'Product 3 Lorem ipsum.',
    photos: ['3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '1.jpg', '2.jpg'],
    desc: 'Lorem ipsum',
    oldPrice: 75,
    price: 100,
    category: { id: 3, name: 'Кросовки', photo: '' },
  },
};

export const Товар_4 = {
  args: {
    name: 'Product 4 Lorem ipsum dolor',
    photos: ['4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '1.jpg', '2.jpg', '3.jpg'],
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
    oldPrice: 35,
    price: 142,
    category: { id: 3, name: 'Кросовки', photo: '' },
  },
};

export const Товар_5 = {
  args: {
    name: 'Product 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consectetur',
    photos: ['5.jpg', '6.jpg', '7.jpg', '8.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
    oldPrice: 67,
    price: 112,
    category: { id: 3, name: 'Кросовки', photo: '' },
  },
};

export const Товар_6 = {
  args: {
    name: 'Product 6 Lorem ipsum dolor, sit amet consecteturProduct 6 Lorem ipsum dolor, sit amet consecteturProduct 6 Lorem ipsum dolor, sit amet consectetur',
    photos: ['6.jpg', '7.jpg', '8.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
    desc: '',
    oldPrice: 70,
    price: 65,
    category: { id: 2, name: 'Кофты', photo: '' },
  },
};

export const Товар_7 = {
  args: {
    name: 'Product 7 Lorem ipsum dolor, sit amet consecteturProduct 7 Lorem ipsum dolor, sit amet consecteturProduct 7 Lorem ipsum dolor, sit amet consectetur',
    photos: ['7.jpg', '8.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. EumLorem ipsum, dolor sit amet consectetur adipisicing elit. EumLorem ipsum, dolor sit amet consectetur adipisicing elit. Eum',
    oldPrice: 79,
    price: 67,
    category: { id: 2, name: 'Кофты', photo: '' },
  },
};

export const Товар_8 = {
  args: {
    name: 'Product 8 Lorem ipsum dolor, sit amet consectetur',
    photos: ['8.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'],
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
    oldPrice: 70,
    price: 65,
    category: { id: 3, name: 'Кросовки', photo: '' },
  },
};
