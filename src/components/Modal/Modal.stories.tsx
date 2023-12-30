import type { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {},
};

const Template: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Открыть</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        {args.children}
      </Modal>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  children: 'Content',
};

export default meta;
