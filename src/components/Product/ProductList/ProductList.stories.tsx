import type { Meta } from '@storybook/react';
import { ProductList } from './ProductList';

const meta: Meta<typeof ProductList> = {
  title: 'Компоненты/Product/ProductList',
  component: ProductList,
  tags: ['autodocs'],
};

export default meta;

export const Список_товаров_1 = {
  args: {
    products: [
      {
        id: 1,
        name: 'Product 1 Lorem ipsum dolor, sit amet consecteturProduct 1 Lorem ipsum dolor, sit amet consecteturProduct 1 Lorem ipsum dolor, sit amet consectetur',
        photos: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'],
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
        oldPrice: 65,
        price: 70,
        category: { id: 1, name: 'Платья', photo: '' },
        properties: {
          hit: true,
          nеw: true,
        },
      },
      {
        id: 2,
        name: 'Product 2',
        photos: ['2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '1.jpg'],
        desc: 'Lorem ipsum, dolor',
        oldPrice: 0,
        price: 65,
        category: { id: 2, name: 'Кофты', photo: '' },
        properties: {
          hit: true,
          nеw: false,
        },
      },
      {
        id: 3,
        name: 'Product 3 Lorem ipsum.',
        photos: ['3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '1.jpg', '2.jpg'],
        desc: 'Lorem ipsum',
        oldPrice: 154,
        price: 65,
        category: { id: 3, name: 'Кросовки', photo: '' },
        properties: {
          hit: false,
          nеw: true,
        },
      },
      {
        id: 4,
        name: 'Product 4 Lorem ipsum dolor',
        photos: ['4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '1.jpg', '2.jpg', '3.jpg'],
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
        oldPrice: 246,
        price: 798,
        category: { id: 3, name: 'Кросовки', photo: '' },
        properties: {
          hit: false,
          nеw: false,
        },
      },
      {
        id: 5,
        name: 'Product 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consectetur',
        photos: ['5.jpg', '6.jpg', '7.jpg', '8.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'],
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
        oldPrice: null,
        price: 1000,
        category: { id: 3, name: 'Кросовки', photo: '' },
        properties: {
          hit: true,
          nеw: true,
        },
      },
      {
        id: 6,
        name: 'Product 6 Lorem ipsum dolor, sit amet consecteturProduct 6 Lorem ipsum dolor, sit amet consecteturProduct 6 Lorem ipsum dolor, sit amet consectetur',
        photos: ['6.jpg', '7.jpg', '8.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
        desc: '',
        oldPrice: 70,
        price: 65,
        category: { id: 2, name: 'Кофты', photo: '' },
        properties: {
          hit: false,
          nеw: true,
        },
      },
      {
        id: 7,
        name: 'Product 7 Lorem ipsum dolor, sit amet consecteturProduct 7 Lorem ipsum dolor, sit amet consecteturProduct 7 Lorem ipsum dolor, sit amet consectetur',
        photos: ['7.jpg', '8.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. EumLorem ipsum, dolor sit amet consectetur adipisicing elit. EumLorem ipsum, dolor sit amet consectetur adipisicing elit. Eum',
        oldPrice: 42,
        price: 78,
        category: { id: 2, name: 'Кофты', photo: '' },
        properties: {
          hit: true,
          nеw: false,
        },
      },
      {
        id: 8,
        name: 'Product 8 Lorem ipsum dolor, sit amet consectetur',
        photos: ['8.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'],
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
        oldPrice: 945646,
        price: 78,
        category: { id: 3, name: 'Кросовки', photo: '' },
        properties: {
          hit: false,
          nеw: true,
        },
      },
    ],
  },
};
