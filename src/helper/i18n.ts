import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLanguageLocalStorage } from '../helper/localStorage';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        buttons: {
          modalBtn: 'Show modal',
        },
        test: 'Enter the text for the modal window',
      },
    },
    ru: {
      translation: {
        buttons: {
          modalBtn: 'Показать модальное окно',
        },
        test: 'Введите текст для модального окна',
      },
    },
  },
  lng: getLanguageLocalStorage() || 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
