import React, { FC, ReactElement } from 'react';
import './Header.scss';
import { Logo } from '../Logo/Logo';
import { ThemeSwitch } from '../Switches/ThemeSwitch/ThemeSwitch';
import { LanguageSwitch } from '../Switches/LanguageSwitch';
import { Navigation } from '../Navigation/Navigation';
import { useTranslation } from 'react-i18next';

window.addEventListener('scroll', function () {
  document.getElementById('header-nav').classList.toggle('header-scroll', window.scrollY > 135);
  console.log('scroll', this.window.scrollY);
});

export const Header: FC = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <header id="header-nav" className="header">
      <div className="col-3">
        <Logo title={t('logo.title')} />
      </div>
      <div className="col-7 ">
        <Navigation />
      </div>
      <div className="col-2">
        <div className="d-flex justify-content-end">
          <div className="btn-group me-2">
            <ThemeSwitch />
          </div>
          <div className="btn-group me-2">
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </header>
  );
};
