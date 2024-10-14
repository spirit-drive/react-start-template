import type { Meta, StoryObj } from '@storybook/react';

import { ModalForm as ModalFormComponent } from '../UI/ModaForm/ModalForm';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof ModalFormComponent> = {
  title: 'Example/ModalForm',
  component: ModalFormComponent,
  tags: ['autodocs'],
};

export default meta;

export const ModalForm: Story = {
  args: {
    inputValue: '',
    setInputValue: null,
    handleModalFormClick: null,
  },
};
