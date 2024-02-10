import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LanguageProvider } from '../../helper/useLanguage';
import { ThemeProvider } from '../../helper/useTheme';
import SliderRange from './SliderRange';

const meta: Meta<typeof SliderRange> = {
  component: SliderRange,
};

type Story = StoryObj<typeof SliderRange>;

export const Primary: Story = {
  args: {
    min: 0,
    max: 100,
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
