import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';

import '../../app/App.css';

interface LogoProps {
  /** Флаг тёмной темы */
  onDark: boolean;
}

/**
 * Компонент "Логотип"
 */

export const Logo = ({ onDark = false }: LogoProps): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <a href="/main" className="flex-row align-items-center">
      <img
        width="40"
        height="40"
        src={
          onDark
            ? 'https://img.icons8.com/ios-filled/100/FCC419/logo.png'
            : 'https://img.icons8.com/ios-filled/100/666600/logo.png'
        }
        alt="Груша"
      />
      <div className={clsx('margin-left-8', onDark ? 'txt-white' : 'txt-black')}>{t('header.appTitle')}</div>
    </a>
  );
};
