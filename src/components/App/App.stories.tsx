import App from '../App/App';
import { LanguageProvider } from '../../helper/useLanguage';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../helper/useTheme';
import { LoginProvider } from '../../helper/useLogin';


const meta: Meta<typeof App> = {
  component: App,
};

type Story = StoryObj<typeof App>;

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <LoginProvider>
          <ThemeProvider>
            <LanguageProvider>
              <div style={{marginTop: 90}}>
                <div>email: test@mail.ru</div>
                <div>password: 1234</div>
                <div style={{color: 'grey', fontSize: 12}}>для удобства)</div>
              </div>
              <Story />
            </LanguageProvider>
          </ThemeProvider>
      </LoginProvider>
    ),
  ],
};

export default meta;
