import { useTranslation } from 'react-i18next';
import React from 'react';

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
    </div>
  );
};
