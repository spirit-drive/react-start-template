import { Meta } from '@storybook/react';
import { SimpleButton } from './SimpleButton';

const meta: Meta<typeof SimpleButton> = {
  title: 'SimpleButton',
  component: SimpleButton,
  argTypes: {},
};

export default meta;

export const Default = {
  args: {
    text: 'Default text',
  },
};
