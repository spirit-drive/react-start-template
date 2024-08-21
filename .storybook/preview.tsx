import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from '../src/app/context/ThemeContext';
import { LanguageProvider } from '../src/app/context/LanguageContext';
import '../src/index.scss'


const preview: Preview = {

    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <>
                < ThemeProvider >
                    <LanguageProvider>
                        < Story />
                        
                    </LanguageProvider>
                </ThemeProvider>
            </>
        ),
    ],
};

export default preview;
