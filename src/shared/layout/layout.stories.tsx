import { Meta, StoryObj } from '@storybook/react';
import Layout, { LayoutProps } from './layout';
import React from 'react';

const meta: Meta<typeof Layout> = {
    title: 'Components/Layout',
    component: Layout,
    argTypes: {

    }
}

export default meta;

export const Main: StoryObj<typeof Layout> = {
    render: (args: LayoutProps) => <Layout {...args} />,
    args: {

    }
};