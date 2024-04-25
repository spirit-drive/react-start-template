import React, { FC, useContext, useState } from 'react';
import ThemeContext from '../layout/layout';
import { Logo } from '../logo/logo';
import { LocaleSwitcher } from '../switchers/localSwitcher';
import { useTranslation } from 'react-i18next';
import { Toggle } from '../toggles/toggle';
import { useNavigate } from 'react-router';

import './header.css';

export const Header: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');

  const handleChange = (e: any) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };

  return (
    <div className={theme == 'dark' ? 'dark' : 'light'}>
      <div className='header'>
      <Logo />
      <div className="title">{t('title')}</div>
      <div className="title active" onClick={() => navigate('/')}>Профиль</div>
      <div className="title active" onClick={() => navigate('/operations')}>Операции</div>
      </div>
      <LocaleSwitcher />
      <Toggle func={handleChange} theme={theme} />
    </div>
  );
};
