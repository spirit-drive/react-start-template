import React, { createContext, useState, ReactNode } from "react";
import { I18nContextType } from "../localization/localTypes";
import { Language } from "../localization/localTypes";
import i18n from "i18next";

interface ILanguageProviderProps {
    children: ReactNode;
  }


export const LanguageContext = createContext<I18nContextType>({
    language: 'ru', setLanguage: () => { },
    i18n: i18n
});

export const LanguageProvider: React.FC<ILanguageProviderProps> = ({ children }) => {

    const [language, setLanguage] = useState<Language>('ru')
    return <LanguageContext.Provider value={{ language, setLanguage, i18n }}>
        {children}
    </LanguageContext.Provider>
}

