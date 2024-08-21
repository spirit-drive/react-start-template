import type { Meta, StoryObj } from '@storybook/react';
import { OperationsList } from './OperationsList';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof OperationsList> = {
    title: 'shared/OperationsList',
    component: OperationsList,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof OperationsList>;
export const Default: Story = {
    args: {
        id: 1,
        amount: 100,
        categoryName: 'категория',
        name: 'название',
        shortDescription: 'короткое описание',
    },
};
