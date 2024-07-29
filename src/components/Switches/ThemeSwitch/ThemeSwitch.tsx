import React, { FC, ReactElement, useContext } from 'react';
import { ThemeProvider, ThemeContext } from '../../../helper/ThemeProvider';

import './ThemeSwitch.scss';
import cn from 'classnames';

const ThemeSwitcherElement: FC = (): ReactElement => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-switch d-flex justify-content-center">
      <a onClick={changeThemeHandler}>
        <i className={cn('fa-regular', `${theme === 'light' ? 'fa-moon' : 'fa-sun'}`)}></i>
      </a>
    </div>
  );
};

export const ThemeSwitch: FC = (): ReactElement => {
  return (
    <ThemeProvider>
      <ThemeSwitcherElement />
    </ThemeProvider>
  );
};
