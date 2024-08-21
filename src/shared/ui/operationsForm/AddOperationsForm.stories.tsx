import type { Meta, StoryObj } from '@storybook/react';
import { AddOperationForm } from './AddOperationForm';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AddOperationForm> = {
    title: 'shared/AddOperationForm',
    component: AddOperationForm,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof AddOperationForm>;
export const Default: Story = {};