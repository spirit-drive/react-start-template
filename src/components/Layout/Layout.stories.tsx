import Layout from '../Layout/Layout';
import { LanguageProvider } from '../../helper/useLanguage';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../helper/useTheme';
import { StoreProvider } from '../../helper/useStore';
import { LoginProvider } from '../../helper/useLogin';

const meta: Meta<typeof Layout> = {
  component: Layout,
};

type Story = StoryObj<typeof Layout>;

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <LoginProvider>
        <StoreProvider>
          <ThemeProvider>
            <LanguageProvider>
              <Story />
            </LanguageProvider>
          </ThemeProvider>
        </StoreProvider>
      </LoginProvider>

    ),
  ],
};

export default meta;
