import { Meta, StoryObj } from '@storybook/react';
import Logo, { LogoProps } from './logo';
import React from 'react';

const meta: Meta<typeof Logo> = {
    title: 'Components/Logo',
    component: Logo,
    argTypes: {
        size: { control: { type: "number" }}
    }
}

export default meta;

export const Main: StoryObj<typeof Logo> = {
    render: (args: LogoProps) => <Logo {...args} />,
    args: {
        size: 50
    }
};