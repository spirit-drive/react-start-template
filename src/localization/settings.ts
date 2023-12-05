import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";

export const LANG_STORAGE_KEY = "lang";

export enum Locale {
    Ru = "Ru",
    En = "En",
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem(LANG_STORAGE_KEY) || Locale.Ru,
        interpolation: {
            escapeValue: false, 
        },
    } as InitOptions);

export default i18n;
