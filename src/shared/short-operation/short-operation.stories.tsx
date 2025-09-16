import { Meta, StoryObj } from '@storybook/react';
import ShortOperation, { ShortOperationProps } from './short-operation';
import React from 'react';

const meta: Meta<typeof ShortOperation> = {
    title: 'Components/ShortOperation',
    component: ShortOperation,
    argTypes: {
        sum: { control: { type: 'number' } },
    }
}

export default meta;

export const Main: StoryObj<typeof ShortOperation> = {
    render: (args: ShortOperationProps) => <ShortOperation {...args} />,
    args: {
        sum: 25.2,
        category: "категория",
        name: "доход",
        description: "описание операции"
    }
};