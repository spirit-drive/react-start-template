import React, { useContext, useState } from 'react';
import { getThemeLocalStorage, setThemeLocalStorage } from './localStorage';
import { ThemeContext, ThemeContextType } from 'src/helper/contexts';

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const useTheme = () => {
  const context: ThemeContextType = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storedTheme: string = getThemeLocalStorage();
  const [theme, setTheme] = useState<string>(storedTheme || Theme.Light);

  const toggleTheme = (): void => {
    const newTheme: Theme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
    setThemeLocalStorage(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme } as ThemeContextType}>{children}</ThemeContext.Provider>;
};
