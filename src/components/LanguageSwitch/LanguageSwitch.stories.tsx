import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../helper/useTheme';
import React from 'react';
import { LanguageProvider } from '../../helper/useLanguage';

const meta: Meta<typeof LanguageSwitch> = {
  component: LanguageSwitch,
};

type Story = StoryObj<typeof LanguageSwitch>;

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
