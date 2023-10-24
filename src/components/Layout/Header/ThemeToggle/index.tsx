import React from 'react';
import { Theme, useThemeContext } from '../../../../theming';
import MoonIcon from '../../../../icons/moon.svg';
import SunIcon from '../../../../icons/sun.svg';

import s from './index.module.scss';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button onClick={toggleTheme} className={s['theme-toggle']}>
      {theme === Theme.light ? <img src={MoonIcon} /> : <img src={SunIcon} />}
    </button>
  );
};

export default ThemeToggle;
