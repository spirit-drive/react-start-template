import React, { useContext, createContext, useReducer } from 'react';

export type Action = 'ru' | 'en';
export type StateLang = typeof defaultLanguage;
export type DispatchLang = (Action: Action) => void;

const defaultLanguage = { lang: 'ru' };
const LanguageContext = createContext<{ stateLang: StateLang; dispatchLang: DispatchLang } | undefined>(undefined);

function languageReduser(stateLang: StateLang, action: Action) {
  switch (action) {
    case 'ru':
      return {
        lang: 'ru',
      };
      break;
    case 'en':
      return {
        lang: 'en',
      };
      break;
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [stateLang, dispatchLang] = useReducer(languageReduser, defaultLanguage);
  return <LanguageContext.Provider value={{ stateLang, dispatchLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useContext inside LanguageProvider!');
  return context;
}
