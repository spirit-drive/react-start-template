import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from '../../helper/useStore';
import { ThemeProvider } from '../../helper/useTheme';
import { LanguageProvider } from '../../helper/useLanguage';
import { LoginProvider } from '../../helper/useLogin';
import React from 'react';

const meta: Meta<typeof RegistrationForm> = {
  component: RegistrationForm,
}

type Story = StoryObj<typeof RegistrationForm>;

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <LoginProvider>
        <StoreProvider>
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
        </StoreProvider>
      </LoginProvider>
    ),
  ]
}

export default meta