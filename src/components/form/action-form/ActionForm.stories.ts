import type { Meta, StoryObj } from '@storybook/react';

import { ActionFormModal } from './ActionFormModal';

const meta: Meta<typeof ActionFormModal> = {
  title: 'Components/ActionFormModal',
  component: ActionFormModal,
  tags: ['autodocs'],
  argTypes: {
    valueInput: '',
    isOpenModal: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ActionForm: Story = {
  args: {
    valueInput: '',
    isOpenModal: false,
  },
};
