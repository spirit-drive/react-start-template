import React, { FC } from 'react';
import cn from 'clsx';
import { WiMoonAltWaningCrescent4, WiDaySunny } from 'react-icons/wi';
import { useThemeContext, Theme } from '../../app/theming';
import s from './ThemeSwitcher.module.sass';

export type ThemeSwitcherProps = {
  className?: string;
};

const icons = {
  [Theme.light]: <WiMoonAltWaningCrescent4 />,
  [Theme.dark]: <WiDaySunny />,
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button type="button" className={cn(s.root, className)} onClick={toggleTheme}>
      {icons[theme]}
    </button>
  );
};
