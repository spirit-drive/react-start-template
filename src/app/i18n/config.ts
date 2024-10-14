import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ELangVariables } from '../Context';
import { resources } from './resources';

i18next.use(initReactI18next).init({
  lng: ELangVariables.RU,
  resources,
});

export default i18next;
