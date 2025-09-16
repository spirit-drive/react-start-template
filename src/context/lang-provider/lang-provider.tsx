import React, { createContext, ReactNode, useState } from "react";
import { useTranslation, Trans } from 'react-i18next';

export type Language = 'ru' | 'en';

type ILanguage = {
    [index in Language]: { name: string; };
};;

export const Languages: ILanguage = {
    ru: { name: 'Ру' },
    en: { name: 'En' },
  };

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
    language: "ru",
    setLanguage: (lang: Language) => {},
});

type LanguageProviderProps = {
    children: ReactNode;
};

/**
 * Провайдер для переключения языка
 */
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguage] = useState<Language>("ru")
    const { i18n } = useTranslation()

    const handleLanguage = async (lang: Language) => {
        setLanguage(() => lang);
        await i18n.changeLanguage(lang);
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider