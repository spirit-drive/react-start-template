import i18n, {InitOptions} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {translationData} from "./";

type LanguagesType = {
    [key: string]: string,
}

export const Languages: LanguagesType = {
    ru: 'ru',
    en: 'en',
}

i18n
    .use(initReactI18next)
    .init({
        resources: translationData,
        lng: navigator.language.slice(0, 2) || Languages.ru,
        interpolation: {
            escapeValue: false,
        },
    } as InitOptions);

export default i18n;