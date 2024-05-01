import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LanguageProvider } from '../../helper/useLanguage';
import { ThemeProvider } from '../../helper/useTheme';
import ProductList from '../ProductList/ProductList';

const meta: Meta<typeof ProductList> = {
  component: ProductList,
};

type Story = StoryObj<typeof ProductList>;

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <LanguageProvider>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </LanguageProvider>
    ),
  ],
};

export default meta;
