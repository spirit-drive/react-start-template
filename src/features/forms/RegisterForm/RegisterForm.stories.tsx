import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import RegisterForm from './RegisterForm'
import { RegisterData } from 'src/models/register';

const meta: Meta<typeof RegisterForm> = {
    title: 'Components/RegisterForm',
    component: RegisterForm,
    argTypes: { }
}

export default meta;


const handleSubmit = (data: RegisterData) => {
    console.debug(data)
}

export const Main: StoryObj<typeof RegisterForm> = {
    render: () => {

        return (
            <RegisterForm onSubmit={handleSubmit} registerError={[]} />
        )
    }
}