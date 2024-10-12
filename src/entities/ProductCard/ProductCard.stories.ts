import type { Meta, StoryObj } from '@storybook/react';

import ProductCard from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const LongDescription: Story = {
  args: {
    price: 1200,
    image:
      'https://cdn.3dmodels.org/wp-content/uploads/Apple/588_Apple_iPhone_15_Plus_Blue/Apple_iPhone_15_Plus_Blue_1000_0001.jpg',
    title: 'iPhone 15',
    description:
      'The iPhone 15 comes with 6.1-inch OLED display and Apple Bionic 16 processor. On the Back there is a Dual camera setup with 48MP main camera and 12MP Ultra-wide sensor.',
  },
};

export const ShortDescription: Story = {
  args: {
    price: 1800,
    image: 'https://neostar.uz/upload/iblock/ce7/5ydmy1v4llf510s2pisy3nj4kjt0ogg5.webp',
    title: 'Acer predator',
    description: 'Bigger, stronger.',
  },
};
