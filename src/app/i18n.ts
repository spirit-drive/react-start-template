import * as i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from 'src/locales/en/translation.json';
import ru from 'src/locales/ru/translation.json';

export const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
} as const;

i18next.use(initReactI18next).init({
  lng: 'ru',
  resources,
});
