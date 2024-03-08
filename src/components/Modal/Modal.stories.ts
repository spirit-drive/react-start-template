import type { Meta } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
};

export default meta;
export const Default = {
  args: {
    children: 'content',
  },
};
