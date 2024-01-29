import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from '../i18n/locales/en.json';
import ru from '../i18n/locales/ru.json';

 export const supportedLngs = {
   en: "English",
   ru: "Pусский",
 };

 const resources = {
    en: {
      translation: en
    },
    ru: {
        translation: ru
      }
  };

i18n
  .use(initReactI18next)
  .init({  
    resources,
    fallbackLng: "en",
    supportedLngs: Object.keys(supportedLngs),
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;