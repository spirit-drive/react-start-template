import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../helper/useTheme';
import { LanguageProvider } from '../../helper/useLanguage';
import { LoginProvider } from '../../helper/useLogin';
import React from 'react';
import CreateProductForm from '../../components/CreateProductForm/CreateProductForm';

const meta: Meta<typeof CreateProductForm> = {
  component: CreateProductForm,
}

type Story = StoryObj<typeof CreateProductForm>;

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
  ]
}

export default meta