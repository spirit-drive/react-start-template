import type { Meta, StoryObj } from '@storybook/react';
import { Cropped } from '../components/cropped/cropped';

const meta: Meta<typeof Cropped> = {
  component: Cropped,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Cropped>;

export const Basic: Story = {
  argTypes: {
    opened: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    rows: {
      control: { type: 'number' },
    },
    length: {
      control: { type: 'number' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    opened: true,
    rows: 1,
    length: 55,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at, dolore earum enim est eveniet facilis illo impedit in, itaque maxime necessitatibus nesciunt nihil non officiis placeat provident quasi reiciendis.',
  },
};
