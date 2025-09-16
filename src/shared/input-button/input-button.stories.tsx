import { Meta, StoryObj } from '@storybook/react';
import InputButton, { InputButtonProps } from './input-button';
import React from 'react';



const meta: Meta<typeof InputButton> = {
    title: 'Components/InputButton',
    component: InputButton,
    argTypes: {

    }
}

export default meta;

export const Main: StoryObj<typeof InputButton> = {
    render: (args) => <InputButton {...args} />,
    args: {
        text: "Сообщение для модального окна",
    }
};