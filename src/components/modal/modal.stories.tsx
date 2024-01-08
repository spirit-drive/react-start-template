import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Modal} from './modal';
import { TestContent } from '../testContent/testContent';

const meta: Meta<typeof Modal> = {
  component: Modal
};

export default meta;

export const Test1 = {
  args: {
    children: <TestContent prop='test'/>,
    setActive: (close: boolean)=> console.log('visible ', close),
  },
};

export const Test2 = {
  args: {
    children: <TestContent prop='hamster'/>,
    setActive: (close: boolean)=> console.log('visible ', close),
  },
};