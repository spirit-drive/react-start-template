import React, { FC, useContext, useState } from 'react';
import { LanguageContext, LanguageContextType } from 'src/helper/contexts';
import { getLanguageLocalStorage, setLanguageLocalStorage } from 'src/helper/localStorage';

enum Languages {
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
  const storedLanguage = getLanguageLocalStorage();
  const [language, setLanguage] = useState<string>(storedLanguage || Languages.EN);

  const toggleLanguage = (): void => {
    const newLanguage: Languages = language === Languages.RU ? Languages.EN : Languages.RU;
    setLanguage(newLanguage);
    setLanguageLocalStorage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage } as LanguageContextType}>
      {children}
    </LanguageContext.Provider>
  );
};
