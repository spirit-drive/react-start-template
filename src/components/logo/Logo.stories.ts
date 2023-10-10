import type { Meta } from '@storybook/react';

import { Logo } from './logo';
import imageFile from './logo.svg';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    pathImage: imageFile,
  },
};

export default meta;

export const LogoItem = {
  arg: {
    pathImage: imageFile,
  },
};
