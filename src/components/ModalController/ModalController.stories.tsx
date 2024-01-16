import ModalController from '../ModalController/ModalController';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/helper/useTheme';
import React from 'react';
import { LanguageProvider } from 'src/helper/useLanguage';

const meta: Meta<typeof ModalController> = {
  component: ModalController,
};

type Story = StoryObj<typeof ModalController>;

export const Primary: Story = {
  args: {},
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
