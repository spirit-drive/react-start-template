import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/modal/modal';
import { CreateOperationForm } from '../screens/operationScreen/ui/create/createOperationForm';
import { UpdateOperationForm } from '../screens/operationScreen/ui/update/updateOperationForm';

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

export const updateOperationt = {
  args: {
    children: <UpdateOperationForm />,
    setActive: (close: boolean) => console.log('visible ', close),
  },
};
