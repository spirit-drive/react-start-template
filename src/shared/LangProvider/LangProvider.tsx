import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CURRENT_LANGUAGE, TLangContext, TLangProviderProps } from "./types";
import React from "react";
import { useTranslation } from "react-i18next";

const LangContext = createContext<TLangContext>({} as TLangContext);

export const useLangContext = (): TLangContext => useContext(LangContext)

const KEY = 'currentLanguage';

export const LangProvider = ({ children }: TLangProviderProps) => {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] =
        useState<CURRENT_LANGUAGE>(localStorage.getItem(KEY) as CURRENT_LANGUAGE || CURRENT_LANGUAGE.RU);

    useEffect(() => {
        i18n.changeLanguage(currentLang);
    }, [currentLang, i18n]);

    const value = useMemo(() => ({currentLang, setCurrentLang}), [currentLang, setCurrentLang]);

    return (
        <LangContext.Provider value={value}>
            <div>{children}</div>
        </LangContext.Provider>
    )

}