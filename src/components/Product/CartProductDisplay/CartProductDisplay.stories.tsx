import type { Meta } from '@storybook/react';
import { CartProductDisplay } from './CartProductDisplay';

const meta: Meta<typeof CartProductDisplay> = {
  title: 'Компоненты/Product/CartProductDisplay',
  component: CartProductDisplay,
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
    price: 70,
  },
};

export const Товар_2 = {
  args: {
    name: 'Product 2 Lorem ipsum dolor, sit amet',
    photo: '2.jpg',
    price: 65,
  },
};

export const Товар_3 = {
  args: {
    name: 'Product 3 Lorem ipsum.',
    photo: '3.jpg',
    price: 100,
  },
};

export const Товар_4 = {
  args: {
    name: 'Product 4 Lorem ipsum dolor',
    photo: '4.jpg',
    price: '',
  },
};

export const Товар_5 = {
  args: {
    name: 'Product 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consectetur',
    photo: '5.jpg',
    price: 65,
  },
};

export const Товар_6 = {
  args: {
    name: 'Product 6 Lorem ipsum dolor, sit amet consecteturProduct 6 Lorem ipsum dolor, sit amet consecteturProduct 6 Lorem ipsum dolor, sit amet consectetur',
    photo: '6.jpg',
    price: 65,
  },
};

export const Товар_7 = {
  args: {
    name: 'Product 7 Lorem ipsum dolor, sit amet consecteturProduct 7 Lorem ipsum dolor, sit amet consecteturProduct 7 Lorem ipsum dolor, sit amet consectetur',
    photo: '7.jpg',
    price: 65,
  },
};

export const Товар_8 = {
  args: {
    name: 'Product 8 Lorem ipsum dolor, sit amet consectetur',
    photo: '8.jpg',
    price: 65,
  },
};
