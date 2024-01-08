import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Operation} from './operation';

const meta: Meta<typeof Operation> = {
  component: Operation,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Operation>;

export const Basic: Story = {args: {}};
