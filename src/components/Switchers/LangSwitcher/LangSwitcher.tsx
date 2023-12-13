import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../../localization';
import './LangSwitcher.scss';

/**
 * Компонент - переключатель языков.
 */
export const LangSwitcher: FC = (): ReactElement => {
  const { i18n } = useTranslation();
  //const lang = (i18n.language as Locale) === Locale.Ru ? Locale.En : Locale.Ru;
  return (    
    <div className="dropdown">
      <button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {' '}
        {i18n.language}{' '}
      </button>
      <ul className="dropdown-menu lang-switcher">
        <li>
          <a className="dropdown-item" onClick={() => i18n.changeLanguage(Locale.Ru)}>
            Ru
          </a>
        </li>
        <li>
          <a className="dropdown-item" onClick={() => i18n.changeLanguage(Locale.En)}>
            En
          </a>
        </li>
      </ul>
    </div>
  );
};
