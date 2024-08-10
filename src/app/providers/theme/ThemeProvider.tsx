import React, { FC, useState, useInsertionEffect } from 'react';
import ThemeContext, { themes, TTheme, THEME_KEY } from './ThemeContext';

export interface ProviderProps {
  children: React.ReactElement;
}

export const ThemeProvider: FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(() => (localStorage.getItem(THEME_KEY) as TTheme) || themes.light);

  const setLightTheme = () => {
    setTheme(themes.light);
  };

  const setDarkTheme = () => {
    setTheme(themes.dark);
  };

  useInsertionEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setLightTheme, setDarkTheme }}>{children}</ThemeContext.Provider>;
};
