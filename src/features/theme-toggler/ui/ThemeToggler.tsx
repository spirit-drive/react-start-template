import React from 'react';

import Styles from './index.module.css';
import { useTheme } from 'src/app/providers/theme-provider';

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className={Styles.simpleToggler} onClick={handleSwitchTheme}>
      <div className={Styles.ball} data-theme={theme} />
    </div>
  );
};
