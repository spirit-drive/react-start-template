import React, { ReactNode, FC, createContext, useEffect, ReactElement } from 'react';
import { Theme } from './types';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const ThemeContext = createContext([]);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }): ReactElement => {
  const [theme, setTheme] = useLocalStorage(Theme.key, Theme.light);
  useEffect(() => {
    if (theme === Theme.dark) {
      document.body.classList.add(Theme.dark);
    } else {
      document.body.classList.remove(Theme.dark);
    }
  }, [theme]);
  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
};
