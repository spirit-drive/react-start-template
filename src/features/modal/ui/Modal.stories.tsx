import { Meta } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    visible: true,
    children: 'Children',
  },
};
