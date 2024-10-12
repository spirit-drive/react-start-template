import React, { FC } from 'react';
import { ThemeProvider } from '../theming';
import { LocalizationInitiator } from '../localization/LocalizationInitiator';

export type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers: FC<ProvidersProps> = ({ children }) => (
  <>
    <LocalizationInitiator />
    <ThemeProvider>{children}</ThemeProvider>
  </>
);
