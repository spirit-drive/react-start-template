import { Meta, StoryObj } from '@storybook/react';
import Collapse from '../Collapse/Collapse';
import { ThemeProvider } from '../../helper/useTheme';
import { LanguageProvider } from '../../helper/useLanguage';
import React from 'react';

const meta: Meta<typeof Collapse> = {
  component: Collapse,
};

type Story = StoryObj<typeof Collapse>;

export const Primary: Story = {
  args: {
    opened: true, // Измените значение по желанию
    children: <div>Ваш текст или компоненты здесь</div>, // Ваш контент для Collapse
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
