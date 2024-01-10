import ModalWindow from './ModalWindow';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ModalWindow> = {
  component: ModalWindow,
};

type Story = StoryObj<typeof ModalWindow>;

export const Primary: Story = {
  args: {
    text: 'test text',
    toggleModal: action('toggleModal'),
  },
};
export default meta;
