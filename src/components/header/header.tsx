import React, { useEffect, useState } from 'react';
import cn from 'clsx';
import './header.css';
import { Logo } from '../logo';
import { Menu } from '../menu';
import { Switcher as ThemeSwitcher } from '../switcher';

import imageFile from './../logo/logo.svg';
import { Context, Themes } from '../../App';
import { useTranslation } from 'react-i18next';

interface headerProps {
  /** Список пунктов меню в хедере */
  menuList?: Array<{ name: string }>;
}

/**
 * Компонент Header
 */
export const Header = ({ menuList }: headerProps): React.ReactElement => {
  const { setThemeState, themesName } = React.useContext(Context);
  const [isEnLang, setIsEnLang] = React.useState<boolean>(false);

  const { i18n } = useTranslation();

  const [isThemeDark, setThemeDark] = useState(false);

  useEffect(() => {
    isThemeDark ? setThemeState(Themes['dark']) : setThemeState(Themes['light']);
  }, [isThemeDark, setThemeState]);

  useEffect(() => {
    isEnLang ? i18n.changeLanguage('en') : i18n.changeLanguage('ru');
  }, [i18n, isEnLang, setThemeState]);

  return (
    <header className={cn('header header-pos-fixed', themesName)}>
      <Logo pathImage={imageFile} />
      <Menu menuList={menuList} />
      <div className="flex-row align-items-center margin-left-auto mr-16">
        <button className="mr-24" onClick={() => setIsEnLang(!isEnLang)}>
          {isEnLang ? 'EN' : 'RU'}
        </button>
        <ThemeSwitcher
          label={isThemeDark ? 'Dark' : 'Light'}
          isOn={isThemeDark}
          handleToggle={() => setThemeDark(!isThemeDark)}
        />
      </div>
    </header>
  );
};
