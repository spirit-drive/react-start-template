import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from '../src/components/Provider/ThemeProvider';
import { I18nextProvider } from "react-i18next";
import i18n from '../src/localization/i18next_settings'


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
      <div style={{display:'flex', flexDirection:'column', minHeight:'600px'}}>
         <I18nextProvider i18n={i18n}>
          <ThemeProvider>
            <div style={{ display: 'flex', flexDirection: 'column', padding:'8px' }}>
              <Story />
            </div>
          </ThemeProvider>
          </I18nextProvider>
      </div>
    )
  ]
};

export default preview;
