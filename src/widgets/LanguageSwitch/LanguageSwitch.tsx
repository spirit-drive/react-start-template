import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../localization';
import './LanguageSwitch.scss';

export const LanguageSwitch: FC = (): ReactElement => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const changeLangHandler = () => {
    i18n.changeLanguage(lang === Locale.Ru ? Locale.En : Locale.Ru);
  };
  return (
    <div className="lang-switch d-flex justify-content-center">
      <a onClick={changeLangHandler}>
        <i>{lang}</i>
      </a>
    </div>
  );
};
