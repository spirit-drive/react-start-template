import type { Meta, StoryObj } from '@storybook/react';

import { BtnToCart } from './BtnToCart';

const meta: Meta<typeof BtnToCart> = {
    title: 'Shop/Button to card',
    component: BtnToCart,
};

export default meta;
type Story = StoryObj<typeof BtnToCart>;

export const Default: Story = {
    args: {
        counter: 0,
        disabled: false
    }
};