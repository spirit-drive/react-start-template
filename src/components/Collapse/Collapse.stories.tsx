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
    opened: false,
    children: <div>Ваш текст или компоненты здесь</div>,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LanguageProvider>
          <div>
            <h1>Collapse component</h1>
            <div>Измените значение opened для отображения</div>
          </div>
          <Story />
        </LanguageProvider>
      </ThemeProvider>
    ),
  ],
};

export default meta;
