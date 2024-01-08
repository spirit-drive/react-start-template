import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {TestContent} from './testContent';

const meta: Meta<typeof TestContent> = {
  component: TestContent,
};

export default meta;

type Story = StoryObj<typeof TestContent>;

export const Basic: Story = {args: {}};
