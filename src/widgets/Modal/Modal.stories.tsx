import type { Meta } from '@storybook/react';
import { Modal, ModalProps } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Modal window',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    header: {
      type: 'string',
      description: 'Modal window title ',
    },
    children: {
      description: 'children element',
    },
    visible: {
      type: 'boolean',
      description: 'Modal window visibility',
    },
    onClose: {
      description: 'onClose event',
    },
  },
};

export default meta;

export const Primary: { args: ModalProps } = {
  args: {
    header: 'Perfect header',
    children: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book.`,
    visible: true,
    onClose: () => undefined,
  },
};
