import { Meta } from '@storybook/react';
import { ItemCard } from './ItemCard';

const meta: Meta<typeof ItemCard> = {
  title: 'ItemCard',
  component: ItemCard,
};

export default meta;

export const Default = {
  args: {
    price: '1000',
    description: 'Best item in our shop',
    label: 'Default label of item',
    imgSrc: 'some link',
  },
};
