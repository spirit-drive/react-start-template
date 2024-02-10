import { createContext } from 'react';
import { DisplayProductProps } from '../types';

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export type LanguageContextType = {
  language: string;
  toggleLanguage: () => void;
};

export type StoreContextType = {
  product: DisplayProductProps[];
  addProduct: (newPoduct: DisplayProductProps) => void;
};

export type LoginContexType = {
  isLogin: boolean;
  toggleIsLogin: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const LoginContext = createContext<LoginContexType | undefined>(undefined);
