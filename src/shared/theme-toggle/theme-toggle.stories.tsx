import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../context/theme-provider/theme-provider';
import ThemeToggle from './theme-toggle';

const meta: Meta<typeof ThemeToggle> = {
    title: 'Components/ThemeToggle',
    component: ThemeToggle,
    argTypes: {

    }
}

export default meta;

export const Main: StoryObj<typeof ThemeToggle> = {
    render: () => (<ThemeProvider>
                        <ThemeToggle />
                </ThemeProvider>),
    args: {

    }
};