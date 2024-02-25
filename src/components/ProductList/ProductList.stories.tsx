import { Meta, StoryObj } from '@storybook/react';
import ProductList from '../ProductList/ProductList';
import { ThemeProvider } from '../../helper/useTheme';
import React from 'react';
import { LanguageProvider } from '../../helper/useLanguage';
import { StoreProvider } from '../../helper/useStore';

const meta: Meta<typeof ProductList> = {
  component: ProductList,
};

type Story = StoryObj<typeof ProductList>;

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreProvider>
        <LanguageProvider>
          <ThemeProvider>
            <Story />
          </ThemeProvider>
        </LanguageProvider>
      </StoreProvider>
    ),
  ],
};

export default meta;
