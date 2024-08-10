import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../i18n/en/translation.json';
import translationRU from '../i18n/ru/translation.json';

export type Locales = {
  ru: {
    code: string;
    title: string;
  };
  en: {
    code: string;
    title: string;
  };
};

export const LOCALIZATION_KEY = 'lang';

export const locales: Locales = {
  ru: {
    code: 'ru',
    title: 'Русский',
  },
  en: {
    code: 'en',
    title: 'English',
  },
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
  },
  lng: localStorage.getItem(LOCALIZATION_KEY) || locales.ru.code,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
