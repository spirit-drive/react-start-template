import { Meta } from '@storybook/react';
import CartProductCard from './CartProductCard';

const meta: Meta<typeof CartProductCard> = {
  title: 'Cart Product Card',
  component: CartProductCard,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    title: 'Ветровка, куртка, анорак спортивный',
    price: 3225,
    image_url: 'https://basket-11.wbbasket.ru/vol1610/part161032/161032169/images/c516x688/1.webp',
  },
};
