import { Meta, StoryObj } from '@storybook/react';
import AddToBasketButton, { AddToBasketButtonProps } from './add-to-basket-button';
import React from 'react';

const meta: Meta<typeof AddToBasketButton> = {
    title: 'Components/AddToBasketButton',
    component: AddToBasketButton,
    argTypes: {
        count: { control: { type: 'number' } },
    }
}

export default meta;

export const Main: StoryObj<typeof AddToBasketButton> = {
    render: (args: AddToBasketButtonProps) => <AddToBasketButton {...args} />,
    args: {
        count: 0,
    }
};