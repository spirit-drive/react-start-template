import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LanguageProvider } from '../../helper/useLanguage';
import { LoginProvider } from '../../helper/useLogin';
import { ThemeProvider } from '../../helper/useTheme';
import Layout from '../Layout/Layout';

const meta: Meta<typeof Layout> = {
  component: Layout,
};

type Story = StoryObj<typeof Layout>;

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <LoginProvider>
        <ThemeProvider>
          <LanguageProvider>
            <Story />
          </LanguageProvider>
        </ThemeProvider>
      </LoginProvider>
    ),
  ],
};

export default meta;
