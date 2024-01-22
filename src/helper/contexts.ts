import { createContext } from 'react';
import { StoreType } from '../store';

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

export const StoreContext = createContext<StoreType | undefined>(undefined);