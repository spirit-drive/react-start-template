import type { Meta,StoryObj } from '@storybook/react';
import  { ButtonTheme } from './ButtonTheme';


const meta: Meta<typeof ButtonTheme> = {
  title: 'ButtonThemeus',
  component: ButtonTheme
};

export default meta;

type Story = StoryObj<typeof meta>

export const Default = {
  args: { primary: true,
    label: 'ButtonTheme2',
  },
};

