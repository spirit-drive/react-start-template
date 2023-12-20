import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Modal, { IModal } from './index';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

const Template: Story<IModal> = (args:IModal) => <Modal {...args} />;

let visible = true

export const Default = Template.bind({});
Default.args = {
  visible: visible,
  onClose: () => {
    visible = !visible
  },
  children: 'Я модальное окно'
} as IModal;  