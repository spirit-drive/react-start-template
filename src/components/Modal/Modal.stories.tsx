import React from 'react';
import { StoryFn , Meta } from '@storybook/react';
import Modal, { IModal } from './index';

export default {
  title: 'Modaleus',
  component: Modal,
} as Meta;

const Template: StoryFn <IModal> = (args:IModal) => <Modal {...args} />;

let isOpen = true

export const Default = Template.bind({});
Default.args = {
  visible: isOpen,
  onClose: () => {
    isOpen = !isOpen
  },
  children: 'Можно заполнить аргумент в настройках'
} as IModal;  