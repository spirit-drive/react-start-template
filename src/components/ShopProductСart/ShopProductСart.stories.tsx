import type { Meta, StoryObj } from '@storybook/react';
import {ShopProductСart} from '.';



// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ShopProductСart> = {
  title: 'ShopProduct Сarteus',
  component: ShopProductСart
};

export default meta;

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    image: 'https://img2.freepng.ru/20180806/siu/kisspng-laptop-asus-zenbook-3-intel-core-i5-cebrac-5b67cb65470759.909331961533528933291.jpg',
    price: 123456,
    name: 'Товар №1'
  }
}
