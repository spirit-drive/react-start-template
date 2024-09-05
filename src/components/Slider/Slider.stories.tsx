import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Slider from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Компоненты/Slider',
  component: Slider,
};

type Story = StoryObj<typeof Slider>;

export const Primary: Story = {
  args: {
    min: -50,
    max: 50,
    value: 0,
    inputIsVisible: true,
  },
  decorators: [(Story) => <Story />],
};

export default meta;
