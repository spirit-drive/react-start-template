import React, { createContext, FC, useCallback, useContext, useInsertionEffect, useState, useMemo, useEffect } from 'react';
import { THEME } from './types';

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: THEME;
  toggleTheme: () => void;
  setTheme: (theme: THEME) => void;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const useThemeContext = (): ThemeContextType => useContext(ThemeContext);

const KEY = 'theme';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<THEME>(() => (localStorage.getItem(KEY) as THEME) || THEME.light);

  useEffect(() => {
    localStorage.setItem(KEY, theme);
    document.body.classList.toggle("dark-theme");
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme((v) => (v === THEME.light ? THEME.dark : THEME.light)), []);

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);
  return (
    <ThemeContext.Provider value={value}>
      <div >{children}</div>
    </ThemeContext.Provider>
  );
};