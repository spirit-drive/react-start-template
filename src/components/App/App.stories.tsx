import App from '../App/App';
import { LanguageProvider } from '../../helper/useLanguage';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../helper/useTheme';
import { StoreProvider } from '../../helper/useStore';
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
        <StoreProvider>
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
        </StoreProvider>
      </LoginProvider>
    ),
  ],
};

export default meta;
