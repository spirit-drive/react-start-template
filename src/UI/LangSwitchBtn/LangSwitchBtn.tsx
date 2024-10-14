import React from 'react';
import { useTranslation } from 'react-i18next';
import { ELangVariables } from '../../app/Context';
import clsx from 'clsx';

import '../../app/App.css';
import './lang-switch-btn.css';

/**
 * Компонент "LangSwitchBtn"
 *
 * Служит для переключения языковой схемы приложения
 */

export const LangSwitchBtn = (): React.ReactElement => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const changeLangHandler = () => {
    i18n.changeLanguage(lang === ELangVariables.RU ? ELangVariables.EN : ELangVariables.RU);
  };

  return (
    <button className="lang-switch-btn margin-left-16" onClick={changeLangHandler}>
      <span className={clsx(lang === ELangVariables.RU && 'active')}>RU</span>
      <span className={clsx(lang === ELangVariables.EN && 'active')}>EN</span>
    </button>
  );
};
