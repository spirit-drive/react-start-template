import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import Collapse from "../Collapse";

const meta: Meta<typeof Collapse> = {
    title: 'Shop/Collapse',
    component: Collapse,
};

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Default: Story = {
    args: {
        open: false,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid at beatae cupiditate doloremque dolorum ea est explicabo, harum ipsa iusto magnam maxime nulla officia qui reiciendis reprehenderit, sit voluptates!'
    },
    render: ({...args}) => (<Collapse open={args.open}>{args.children}</Collapse>)
};