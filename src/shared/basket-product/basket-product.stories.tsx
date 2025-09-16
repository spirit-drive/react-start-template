import { Meta, StoryObj } from '@storybook/react';
import BasketProduct, { BasketProductProps } from './basket-product';
import React from 'react';
import imageFile from '../../../files/Y4dwCKmKocM.jpg';


const meta: Meta<typeof BasketProduct> = {
    title: 'Components/BasketProduct',
    component: BasketProduct,
    argTypes: {
        price: { control: { type: 'number' } },
    }
}

export default meta;

export const Main: StoryObj<typeof BasketProduct> = {
    render: (args: BasketProductProps) => <BasketProduct {...args} />,
    args: {
        price: 100,
        name: "товар",
        photo: imageFile
    }
};
