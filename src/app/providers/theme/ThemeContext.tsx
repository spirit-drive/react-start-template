import { createContext } from 'react';

export const THEME_KEY = 'theme';
export type TTheme = 'light' | 'dark';
export const themes: { dark: TTheme; light: TTheme } = {
  dark: 'dark',
  light: 'light',
};

export default createContext({
  theme: themes.light,
  setLightTheme: (): void => undefined,
  setDarkTheme: (): void => undefined,
});
