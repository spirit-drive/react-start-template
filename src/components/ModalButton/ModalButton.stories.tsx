import React from 'react';
import { StoryFn , Meta } from '@storybook/react';
import ModalButton from './ModalButton';

export default {
  title: 'ModalButtoneus',
  component: ModalButton,
} as Meta;

const Template: StoryFn <{}> = () => <ModalButton  />;

let isOpen = true

export const Default = Template.bind({});
Default.args = {
 
} ;  