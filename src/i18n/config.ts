import i18next from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';
import en from './en/translation.json';
import ru from './ru/translation.json';

i18next.use(initReactI18next).init({
  lng: 'ru', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: en,
    },
    ru: {
        translation: ru,
    }
  },
  // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
  // set returnNull to false (and also in the i18next.d.ts options)
  // returnNull: false,
});