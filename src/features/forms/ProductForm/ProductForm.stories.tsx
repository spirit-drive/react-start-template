import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import ProductForm from './ProductForm'
import { ProductEditModel } from 'src/models/product/editProduct';

const meta: Meta<typeof ProductForm> = {
    title: 'Components/ProductForm',
    component: ProductForm,
    argTypes: { }
}

export default meta;


const handleCancel = () => {
    console.debug("cancel")
}

const handleSubmit = (data: ProductEditModel) => {
    console.debug(data)
}

export const Main: StoryObj<typeof ProductForm> = {
    render: () => {

        return (
            <ProductForm onSubmit={handleSubmit}/>
        )
    }
}