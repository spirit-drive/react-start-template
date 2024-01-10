import ModalController from '../ModalController/ModalController';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ModalController> = {
  component: ModalController,
};

type Story = StoryObj<typeof ModalController>;

export const Primary: Story = {
  args: {},
};

export default meta;
