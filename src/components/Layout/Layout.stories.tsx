import Layout from '../Layout/Layout';
import { LanguageProvider } from '../../helper/useLanguage';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../helper/useTheme';
import { StoreProvider } from '../../helper/useStore';

const meta: Meta<typeof Layout> = {
  component: Layout,
};

type Story = StoryObj<typeof Layout>;

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreProvider>
        <ThemeProvider>
          <LanguageProvider>
            <Story />
          </LanguageProvider>
        </ThemeProvider>
      </StoreProvider>
    ),
  ],
};

export default meta;
