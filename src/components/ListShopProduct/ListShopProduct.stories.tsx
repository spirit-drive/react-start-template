import type { Meta, StoryObj } from '@storybook/react';
import {ListShopProduct} from './ListShopProduct';



// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ListShopProduct> = {
  title: 'ListShopProduct  Сarteus',
  component: ListShopProduct
};

export default meta;

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    products:[  {
      image: 'https://img2.freepng.ru/20180806/siu/kisspng-laptop-asus-zenbook-3-intel-core-i5-cebrac-5b67cb65470759.909331961533528933291.jpg',
      price: 123456,
      name: 'Товар №1',
      id: 'Товар№1'
    },
    {
      image: 'https://express-china.ru/upload/iblock/f41/full_QsU2Pvti.jpg',
      price: 1000,
      name: 'Товар №2',
      id: 'Товар №2',
      description:'sdfsdfdsf'
    },
    {
      image: 'https://static.tildacdn.com/tild3063-3234-4263-b835-373962653933/mobile_2.jpg',
      price: 7777,
      name: 'Товар №3',
      id: 'Товар №3',
      description:'/runtime~main.iframe.bundle.js'

    },
    {
      image: 'https://express-china.ru/upload/iblock/f41/full_QsU2Pvti.jpg',
      price: 888,
      name: 'Товар №4',
      id: 'Товар №4'
    },
  ]
  }
}
