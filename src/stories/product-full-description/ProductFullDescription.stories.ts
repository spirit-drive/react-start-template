import { Meta, StoryObj } from '@storybook/react';
import ProductFullDescription from '../../components/product-full-description/ProductFullDescription';

const meta: Meta<typeof ProductFullDescription> = {
  title: 'ProductFullDescription',
  component: ProductFullDescription,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const ProductCardFullDescription: Story = {
  args: {
    image: 'assets/product-full-image.png',
    name: 'MAGNUM 60Ahs',
    price: '2990 руб',
    description: 'Емкость, Ач: 60 ' +
        'Пусковой ток, А: 500 ' +
        'Полярность: Прямая/Обратная ' +
        'Клеммы: Толстые Pазмеры (ДхШхВ), ' +
        'мм: 242х175х190 ' +
        'Производитель: Magnum Bес, ' +
        'кг: 14.5',
    category: 'Категория: Аккумуляторы'
  },
};
