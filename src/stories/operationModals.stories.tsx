import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/modal/modal';
import { CreateOperationForm } from '../screens/operationScreen/ui/create/createOperationForm';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;

export const createOperation = {
  args: {
    children: <CreateOperationForm />,
    setActive: (close: boolean) => console.log('visible ', close),
  },
};

