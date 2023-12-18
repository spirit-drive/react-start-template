import React, { FC, ReactElement, useContext } from 'react';
import { ThemeProvider } from "../../../theming";
import { ThemeContext } from '../../../theming';
import "./ThemeSwitcher.scss";
import cn from 'classnames';

const ThemeSwitcherElement: FC = (): ReactElement => {
    const [theme, setTheme] = useContext(ThemeContext);
    
    const changeThemeHandler = () => {
      setTheme(theme === 'Light' ? 'Dark' : 'Light');
    };

    return(
        <ul className="theme-switcher d-flex justify-content-center">
        <li>
          <a onClick={changeThemeHandler}>
            <i className={cn('fa-regular', `${theme === 'Light' ? 'fa-moon' : 'fa-sun'}`)}></i>
          </a>
        </li>
      </ul>
    );
};

/**
 * Компонент - переключатель цветовой темы.
 */
export const ThemeSwitcher: FC = (): ReactElement => {
  return(
    <ThemeProvider>
      <ThemeSwitcherElement />
    </ThemeProvider>
  );
}; 