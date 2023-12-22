import type { Meta } from '@storybook/react';
import { ShortProductDisplay } from './ShortProductDisplay';

const meta: Meta<typeof ShortProductDisplay> = {
  title: 'Компоненты/Product/ShortProductDisplay',
  component: ShortProductDisplay,
  tags: ['autodocs'],
  argTypes: {
    photo: {
      options: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

export const Товар_1 = {
  args: {
    name: 'Product 1 Lorem ipsum dolor, sit amet consecteturProduct 1 Lorem ipsum dolor, sit amet consecteturProduct 1 Lorem ipsum dolor, sit amet consectetur',
    photo: '1.jpg',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
    oldPrice: 65,
    price: 70,
  },
};

export const Товар_2 = {
  args: {
    name: 'Product 2',
    photo: '2.jpg',
    desc: 'Lorem ipsum, dolor',
    oldPrice: 65,
    price: 70,
    hit: true,
    nеw: true,
  },
};

export const Товар_3 = {
  args: {
    name: 'Product 3 Lorem ipsum.',
    photo: '3.jpg',
    desc: 'Lorem ipsum',
    oldPrice: 0,
    price: 100,
    hit: true,
    nеw: false,
  },
};

export const Товар_4 = {
  args: {
    name: 'Product 4 Lorem ipsum dolor',
    photo: '4.jpg',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
    oldPrice: 24,
    price: 142,
    hit: false,
    nеw: true,
  },
};

export const Товар_5 = {
  args: {
    name: 'Product 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consectetur',
    photo: '5.jpg',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
    oldPrice: 70,
    price: 65,
    hit: false,
    nеw: false,
  },
};

export const Товар_6 = {
  args: {
    name: 'Product 6 Lorem ipsum dolor, sit amet consecteturProduct 6 Lorem ipsum dolor, sit amet consecteturProduct 6 Lorem ipsum dolor, sit amet consectetur',
    photo: '6.jpg',
    desc: '',
    oldPrice: 70,
    price: 65,
    hit: true,
    nеw: false,
  },
};

export const Товар_7 = {
  args: {
    name: 'Product 7 Lorem ipsum dolor, sit amet consecteturProduct 7 Lorem ipsum dolor, sit amet consecteturProduct 7 Lorem ipsum dolor, sit amet consectetur',
    photo: '7.jpg',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. EumLorem ipsum, dolor sit amet consectetur adipisicing elit. EumLorem ipsum, dolor sit amet consectetur adipisicing elit. Eum',
    oldPrice: 724,
    price: 726,
    hit: true,
    nеw: false,
  },
};

export const Товар_8 = {
  args: {
    name: 'Product 8 Lorem ipsum dolor, sit amet consectetur',
    photo: '8.jpg',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
    oldPrice: 0,
    price: 65,
    hit: true,
    nеw: true,
  },
};
