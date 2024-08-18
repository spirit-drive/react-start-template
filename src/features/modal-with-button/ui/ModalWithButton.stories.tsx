import { Meta } from '@storybook/react';
import ModalWithButton from './ModalWithButton';

const meta: Meta<typeof ModalWithButton> = {
  title: 'Modal with button',
  component: ModalWithButton,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {},
};
