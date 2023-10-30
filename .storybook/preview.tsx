import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/theming/ThemeProvider';
import { LangProvider } from '../src/localization/LocalizationProvider';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <LangProvider>
                    <Story />
                </LangProvider>
            </ThemeProvider>
        ),
    ],
};

export default preview;
