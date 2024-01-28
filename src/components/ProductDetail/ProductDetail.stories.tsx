import React from 'react';
import { Story, Meta } from '@storybook/react';

import ProductDetail, { ProductDetailProps } from './ProductDetail';

export default {
  title: 'components/ProductDetail',
  component: ProductDetail,
} as Meta;

const Template: Story<ProductDetailProps> = (args) => <ProductDetail {...args} />;

export const ProductDetailShoes = Template.bind({});
ProductDetailShoes.args = {
  cost: 300,
  images: ['https://fineshoes.ru/upload/iblock/a86/loake_badminton_mahogany_4.jpg'],
  category: 'Обувь',
  title: 'Броги',
  description: 'Коричневые броги',
};
