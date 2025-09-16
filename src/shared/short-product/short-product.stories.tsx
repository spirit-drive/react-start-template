import { Meta, StoryObj } from '@storybook/react';
import ShortProduct, { ShortProductProps } from './short-product';
import React from 'react';
import imageFile from '../../../files/Y4dwCKmKocM.jpg';


const meta: Meta<typeof ShortProduct> = {
    title: 'Components/ShortProduct',
    component: ShortProduct,
    argTypes: {
        price: { control: { type: 'number' } },
    }
}

export default meta;

export const Main: StoryObj<typeof ShortProduct> = {
    render: (args: ShortProductProps) => <ShortProduct {...args} />,
    args: {
        price: 100,
        name: "товар",
        description: "описание товара",
        image: imageFile
    }
};