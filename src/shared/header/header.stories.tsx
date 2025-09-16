import { Meta, StoryObj } from '@storybook/react';
import Header, { HeaderProps } from './header';
import React from 'react';


const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
    argTypes: {
        visible: { control: { type: 'boolean' } },
    }
}

export default meta;

export const Main: StoryObj<typeof Header> = {
    render: (args: HeaderProps) => <Header {...args} />,
    args: {
        visible: true,
        children: ""
    }
};