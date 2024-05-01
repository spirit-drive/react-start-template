import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { LanguageProvider } from '../../helper/useLanguage';
import { LoginProvider } from '../../helper/useLogin';
import { ThemeProvider } from '../../helper/useTheme';

const meta: Meta<typeof RegistrationForm> = {
  component: RegistrationForm,
};

type Story = StoryObj<typeof RegistrationForm>;

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <LoginProvider>
        <ThemeProvider>
          <LanguageProvider>
            <div>
              <h1>Параметры входа</h1>
              <div>email: test@mail.ru</div>
              <div>password: 1234</div>
            </div>
            <Story />
          </LanguageProvider>
        </ThemeProvider>
      </LoginProvider>
    ),
  ],
};

export default meta;
