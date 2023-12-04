import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANG_STORAGE_KEY, Language } from './settings';

export type LocalizationProviderProps = {
  children: React.ReactNode;
};

export type LocalizationContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LocalizationContext = createContext<LocalizationContextType>({} as LocalizationContextType);

export const useLocalizationContext = (): LocalizationContextType => useContext(LocalizationContext);

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState<Language>(
    i18n.language in Language ? (i18n.language as Language) : Language.ru
  );

  const toggleLanguage = useCallback(
    () =>
      setLanguage((language) => {
        const newLanguage = language === Language.ru ? Language.en : Language.ru;
        localStorage.setItem(LANG_STORAGE_KEY, newLanguage);
        i18n.changeLanguage(newLanguage);

        return newLanguage;
      }),
    [i18n]
  );

  const value = useMemo(() => ({ language, toggleLanguage }), [language, toggleLanguage]);

  return (
    <LocalizationContext.Provider value={value}>
      <div>{children}</div>
    </LocalizationContext.Provider>
  );
};
