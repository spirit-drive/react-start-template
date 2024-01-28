import React from 'react';
import { Story, Meta } from '@storybook/react';

import ProductPreview, { ProductPreviewProps } from './ProductPreview';

export default {
  title: 'components/ProductPreview',
  component: ProductPreview,
} as Meta;

const Template: Story<ProductPreviewProps> = (args) => <ProductPreview {...args} />;

export const SampleProductPreview = Template.bind({});
SampleProductPreview.args = {
  cost: 500,
  image: 'https://live.staticflickr.com/6046/6307024282_58aa2f1caf_b.jpg',
  title: 'Кiт',
  description: 'Кот, новый, в упаковке, 500 рыбов',
};

export const AnotherProductPreview = Template.bind({});
AnotherProductPreview.args = {
  cost: 250,
  image:
    'https://yastatic.net/naydex/yandex-search/wzj6zj793/61f63afWl/cvUbguA93hCHsd0A_QftyXdqyzJlP2P_bDsdsxrSk4q01JLuDblHsZ5Ho2JMihLyhtQn6AqdWijufUputOmY-aJQV7IYiResO10s8D2fcWEHD8saZQ9nqyyW1',
  title: 'Бобр',
  description: 'Бобр Борис',
};
