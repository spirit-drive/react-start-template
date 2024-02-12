import type { Meta,StoryObj } from '@storybook/react';
import  { Button } from '.';


const meta: Meta<typeof Button> = {
  title: 'Buttoneus',
  component: Button
};

export default meta;

type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    primary: true,
    label: 'Buttoneus',
  },
};

