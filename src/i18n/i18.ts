import i18 from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translate.json';
import translationRU from './locales/ru/translate.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

// eslint-disable-next-line import/no-named-as-default-member
i18.use(initReactI18next).use(LanguageDetector).init({
  resources,
  lng: 'en',
});

export default i18;
