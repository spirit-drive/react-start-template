import React, { FC, useContext } from 'react';
import { ThemeContext } from '../../context/theme-provider/theme-provider';
import cn from 'clsx';
import './theme-toggle.css';


/**
 * Компонент переключения тем
 */
const ThemeToggle: FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={cn('theme-toggle', theme+'-theme')}>
            <button
                onClick={() => toggleTheme() }
                >{theme}</button>
        </div>
    );
};

export default ThemeToggle;