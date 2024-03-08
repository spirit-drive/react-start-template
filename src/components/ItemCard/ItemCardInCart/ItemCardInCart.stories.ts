import { Meta } from '@storybook/react';
import { ItemCardInCart } from './ItemCardInCart';

const meta: Meta<typeof ItemCardInCart> = {
  title: 'ItemCardInCart',
  component: ItemCardInCart,
};

export default meta;

export const Default = {
  args: {
    imgSrc: 'link to page',
    label: 'Label of this item',
    price: '1000 руб',
  },
};
