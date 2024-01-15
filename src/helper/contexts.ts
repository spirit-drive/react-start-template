import { createContext } from 'react';

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export type LanguageContextType = {
  language: string;
  toggleLanguage: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
