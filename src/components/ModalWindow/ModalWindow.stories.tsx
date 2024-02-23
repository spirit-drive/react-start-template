import ModalWindow from './ModalWindow';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '../../helper/useTheme';
import { LanguageProvider } from '../../helper/useLanguage';
import React from 'react';

const meta: Meta<typeof ModalWindow> = {
  component: ModalWindow,
};

type Story = StoryObj<typeof ModalWindow>;

export const Primary: Story = {
  args: {
    children: 'test text',
    toggleModal: action('toggleModal'),
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LanguageProvider>
          <Story />
        </LanguageProvider>
      </ThemeProvider>
    ),
  ],
};
export default meta;
