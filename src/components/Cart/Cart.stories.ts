import type { Meta, StoryObj } from '@storybook/react';

import { Cart } from './Cart';

const meta: Meta<typeof Cart> = {
    title: 'Online-store/Cart',
    component: Cart,
    tags: ['autodocs'],
    argTypes: {
        count: {
            control: 'select',
            options: [0, 5, 10],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Cart>;

export const HaveNoGoods: Story = { args: { count: 0 } };
export const HaveSomeGoods: Story = { args: { count: 5 } };
