import React from 'react';
import clsx from 'clsx';

import './header.css';
import '../../app/App.css';

import { Logo } from '../Logo/Logo';
import { ThemeSwitchBtn } from '../ThemeSwitchBtn/ThemeSwitch';
import { LangSwitchBtn } from '../LangSwitchBtn/LangSwitchBtn';
import { urlIncludes } from '../../features';

interface HeaderProps {
  isDark: boolean;
}

/**
 * Компонент "Хедер"
 */

export const Header = ({ isDark }: HeaderProps): React.ReactElement => {
  return (
    <header className={clsx('header', 'sticky', isDark && 'header_dark')}>
      <Logo onDark={isDark} />
      <div className="flex-row align-items-center">
        {urlIncludes('main') && (
          <a className="link-button margin-right-16" href="/profile">
            Профиль
          </a>
        )}
        <ThemeSwitchBtn isDark={isDark} />
        <LangSwitchBtn />
        {(urlIncludes('main') || urlIncludes('profile')) && (
          <a className="link-button danger margin-left-16" href="/">
            Выход
          </a>
        )}
      </div>
    </header>
  );
};
