import { Meta } from '@storybook/react';
import { ItemCardFull } from './ItemCardFull';

const meta: Meta<typeof ItemCardFull> = {
  title: 'ItemCardFull',
  component: ItemCardFull,
};

export default meta;

export const Default = {
  args: {
    imgSrc: ['1', '2', '3'],
    label: 'Default label of item',
    rate: '4.6/5.0',
    reviews: '200 отзывов',
    sold: '12 продано',
    price: '12400',
    description: 'Description of this item',
    badges: ['bestseller', 'Выбор покупателей'],
  },
};
