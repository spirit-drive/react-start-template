import type { Meta, StoryObj } from '@storybook/react';

import { ShortOperation } from './ShortOperation';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ShortOperation> = {
    title: 'shared/ShortOperation',
    component: ShortOperation,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ShortOperation>;
export const Default: Story = {
    args: {
        value: {
            id: 1,
            amount: 100,
            categoryName: 'категория',
            name: 'название',
            shortDescription: 'короткое описание',
        }
    },
};
