import { Meta, StoryObj } from '@storybook/react';
import LongProduct, { LongProductProps } from './long-product';
import React from 'react';
import imageFile from '../../../files/Y4dwCKmKocM.jpg';
import AuthProvider from '../../context/auth-provider/AuthProvider';


const meta: Meta<typeof LongProduct> = {
    title: 'Components/LongProduct',
    component: LongProduct,
    argTypes: {
        // product: { control: { type: 'number' } },
    }
}

export default meta;

export const Main: StoryObj<typeof LongProduct> = {
    render: (args: LongProductProps) =>
        <AuthProvider>
            <LongProduct {...args} />
        </AuthProvider>,
    args: {
        product: {
            id: '',
            price: 100,
            category: { id: '', name: 'категория', createdAt: new Date(), updatedAt: new Date(), commandId: '' },
            name: "товар",
            desc: "описание товара",
            photo: imageFile,
            commandId: '',
            createdAt: undefined,
            updatedAt: undefined
        }
    }
};