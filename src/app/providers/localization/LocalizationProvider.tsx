import React, { useInsertionEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LOCALIZATION_KEY } from 'src/app/config/i18n/settings';

export const LocalizationProvider: React.FC = () => {
  const { i18n } = useTranslation();

  useInsertionEffect(() => {
    localStorage.setItem(LOCALIZATION_KEY, i18n.language);
    const html = document.body.parentElement;
    html.lang = i18n.language;
  }, [i18n.language]);

  return null;
};
