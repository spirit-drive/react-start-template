import React, { FC, useContext, useState } from 'react';
import { LanguageContext, LanguageContextType } from '../helper/contexts';
import { getLanguageLocalStorage, setLanguageLocalStorage } from '../helper/localStorage';
import i18n from '../helper/i18n';

enum LanguagesEnum {
  RU = 'ru',
  EN = 'en',
}

type LanguageProviderProps = {
  children: React.ReactNode;
};
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be using within LanguageProvider');
  }

  return context;
};

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const storedLanguage: string = getLanguageLocalStorage();
  const [language, setLanguage] = useState<string>(storedLanguage || LanguagesEnum.EN);

  const toggleLanguage = (): void => {
    const newLanguage: LanguagesEnum = language === LanguagesEnum.EN ? LanguagesEnum.RU : LanguagesEnum.EN;
    setLanguage(newLanguage);
    setLanguageLocalStorage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage } as LanguageContextType}>
      {children}
    </LanguageContext.Provider>
  );
};
