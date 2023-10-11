import { Meta, StoryObj } from '@storybook/react';
import ProductInBasket from '../../components/product-in-basket/ProductInBasket';

const meta: Meta<typeof ProductInBasket> = {
  title: 'ProductBasket',
  component: ProductInBasket,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const ProductInBasketDescription: Story = {
  args: {
    image: 'assets/product-basket-image.png',
    title: 'MAGNUM 60Ahs',
    price: '2990 руб',
    counter:1
  },
};
