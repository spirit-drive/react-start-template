import React, { FC } from 'react';
import cn from 'clsx';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeContext, THEME } from '../ThemeProvider';
import s from './ThemeSwitcher.module.sass';

export type ThemeSwitcherProps = {
  className?: string;
};

const icons = {
  [THEME.light]: <DarkModeIcon />,
  [THEME.dark]: <LightModeIcon />,
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme, setTheme } = useThemeContext();
  
  return (
    <button className={s.button} type="button" onClick={() => { toggleTheme() }}>
      {icons[theme]}
    </button>
  );
};
