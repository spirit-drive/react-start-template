import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { locales } from 'src/app/config/i18n/settings';
import { Button } from 'src/shared/button/Button';

export const LocalizationSwitcher: FC = () => {
  const { i18n } = useTranslation();

  const onClick = () => {
    const currentLanguage = i18n.language;
    const lanuage = currentLanguage == locales.ru.code ? locales.en.code : locales.ru.code;
    i18n.changeLanguage(lanuage);
  };

  return <Button size="small" onClick={onClick} label={locales[i18n.language as keyof typeof locales].title} />;
};
