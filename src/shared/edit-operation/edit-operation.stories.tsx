import { Meta, StoryObj } from '@storybook/react';
import EditOperation, { EditOperationProps } from './edit-operation';
import React from 'react';

const meta: Meta<typeof EditOperation> = {
    title: 'Components/EditOperation',
    component: EditOperation,
    argTypes: {
        sum: { control: { type: 'number' } },
        date: {
            name: 'дата операции',
            control: { type: 'date'}
        },
    }
}

export default meta;

export const Main: StoryObj<typeof EditOperation> = {
    render: (args: EditOperationProps) => <EditOperation {...args} />,
    args: {
        sum: 25.2,
        category: "категория",
        name: "доход",
        description: "описание операции",
        date: new Date()
    }
};