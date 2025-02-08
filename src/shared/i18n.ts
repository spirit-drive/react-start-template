import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: 'Home',
      about: 'About',
      contacts: 'Contacts',
      cart: 'Cart',
      theme_black: 'Theme black',
      theme_white: 'Theme white',
      login: 'Login',
      register: 'Register',
      profile: 'Profile',
      products: 'List of products',
      new_product: 'Add new product',
      admin: 'Admin Panel',
      Prev: 'Prev',
      Next: 'Next',
      Page: 'Page',
      of: 'of',
      logout: 'logout',
      loading: 'loading',
    },
  },
  ru: {
    translation: {
      home: 'Главная',
      about: 'О нас',
      contacts: 'Контакты',
      cart: 'Корзина',
      theme_black: 'Темная тема',
      theme_white: 'Светлая тема',
      login: 'Войти',
      register: 'Регистрация',
      profile: 'Профиль',
      products: 'Список продуктов',
      new_product: 'Добавить новый товар',
      admin: 'Админка',
      Prev: 'Назад',
      Next: 'След',
      Page: 'Стр.',
      of: 'из',
      logout: 'Выйти',
      loading: 'Загрузка',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru', // Язык по умолчанию
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
