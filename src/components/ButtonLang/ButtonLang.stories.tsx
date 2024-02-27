import type { Meta,StoryObj } from '@storybook/react';
import  { ButtonLang } from './ButtonLang';


const meta: Meta<typeof ButtonLang> = {
  title: 'ButtonLang',
  component: ButtonLang
};

export default meta;

type Story = StoryObj<typeof meta>

export const Default = {
  args: { primary: true,
    label: 'ButtonLang',
  },
};

