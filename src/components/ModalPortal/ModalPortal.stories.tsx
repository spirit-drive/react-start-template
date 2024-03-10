import React from 'react';
import { StoryFn , Meta } from '@storybook/react';
import ModalPortal, { IModalPortal } from './ModalPortal';

export default {
  title: 'ModalPortaleus',
  component: ModalPortal,
} as Meta;

const Template: StoryFn <IModalPortal> = (args:IModalPortal) => <ModalPortal {...args} />;

let isOpen = false

export const Default = Template.bind({});
Default.args = {
  onClose: () => {
    isOpen = !isOpen
  },
  theme: '',
  children: 'Можно заполнить аргумент в настройках'
} as IModalPortal;  