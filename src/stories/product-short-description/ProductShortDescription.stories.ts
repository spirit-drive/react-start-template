import {Meta, StoryObj} from '@storybook/react';
import {ProductShortDescription} from '../../components/product-short-description/ProductShortDescription';

const meta: Meta<typeof ProductShortDescription> = {
  title: 'ProductCard',
  component: ProductShortDescription,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof meta>;


export const ProductCardShortDescription: { args: { image: string; price: string; name: string; description: string } } = {
  args: {
    image: 'assets/product-short-image.png',
    name: 'MAGNUM 60Ahs',
    price: '2990 руб',
    description: 'Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом'
  }
};
