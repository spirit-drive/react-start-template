import React from 'react';
import cn from 'clsx';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Theme } from '../../../../theming/types';
import { useThemeContext } from '../../../../theming/ThemeProvider';
import s from './ThemeSwitcher.module.scss';

export type ThemeSwitcherProps = {
    className?: string;
};

// const icons = {
//     [Theme.light]: <DarkModeIcon />,
//     [Theme.dark]: <LightModeIcon />,
// };

export const ThemeSwitcher = (): React.ReactElement => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <button type="button" className={s.root} onClick={toggleTheme}>
            {/* {icons[theme]} */}
            {theme === Theme.light ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
    );
};
