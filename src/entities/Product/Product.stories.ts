import type { Meta, StoryObj } from '@storybook/react';
import Product from './Product';

const meta: Meta<typeof Product> = {
  title: 'Components/Product',
  component: Product,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Product>;

export const Default: Story = {
  args: {
    price: 99.99,
    images: ['https://via.placeholder.com/200'],
    category: 'Electronics',
    title: 'Cool Gadget',
    description: 'This is a very cool gadget you must have!',
  },
};

export const WithMultipleImages: Story = {
  args: {
    price: 149.99,
    images: ['https://via.placeholder.com/200', 'https://via.placeholder.com/200', 'https://via.placeholder.com/200'],
    category: 'Home Appliances',
    title: 'Useful Appliance',
    description: 'This appliance will make your life easier!',
  },
};
