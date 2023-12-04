import React, { createContext, FC, useCallback, useContext, useState, useMemo, useEffect } from 'react';
import { Theme } from './types';
import '../styles/index.scss';

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const useThemeContext = (): ThemeContextType => useContext(ThemeContext);

const KEY = 'theme';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(KEY) as Theme) || Theme.light);

  useEffect(() => {
    const html = document.body.parentElement;
    if (html) {
      html.classList.add((localStorage.getItem(KEY) as Theme) || Theme.light);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((theme) => {
      const newTheme = theme === Theme.light ? Theme.dark : Theme.light;
      localStorage.setItem(KEY, newTheme);
      const html = document.body.parentElement;
      if (html) {
        html.classList.replace(theme, newTheme);
      }

      return newTheme;
    });
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};
