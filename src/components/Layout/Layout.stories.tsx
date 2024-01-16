import Layout from '../Layout/Layout';
import { LanguageProvider } from 'src/helper/useLanguage';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'src/helper/useTheme';

const meta: Meta<typeof Layout> = {
  component: Layout,
};

type Story = StoryObj<typeof Layout>;

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
