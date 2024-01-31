import App from "../App/App";
import { LanguageProvider } from '../../helper/useLanguage';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../helper/useTheme';
import { StoreProvider } from '../../helper/useStore';

const meta: Meta<typeof App> = {
    component: App,
};

type Story = StoryObj<typeof App>;

export const Primary: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreProvider>
                <ThemeProvider>
                    <LanguageProvider>
                        <Story />
                    </LanguageProvider>
                </ThemeProvider>
            </StoreProvider>
        ),
    ],
};

export default meta