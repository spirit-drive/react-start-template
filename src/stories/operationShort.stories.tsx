import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {OperationShort} from '../components/operationShort/operationShort';

const meta: Meta<typeof OperationShort> = {
  component: OperationShort,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof OperationShort>;

export const Basic: Story = {args: {}};
