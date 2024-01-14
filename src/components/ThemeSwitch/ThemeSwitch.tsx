import React, { useState } from 'react';
import { getThemeLocalStorage } from 'src/helper/localStorage';
import classNames from './themeSwither.module.css';
import clsx from 'clsx';
import { useTheme } from 'src/helper/useTheme';

const ThemeSwitch = () => {
  const { toggleTheme } = useTheme();

  const [currentTheme, setCurrentTheme] = useState(getThemeLocalStorage());
  const handleThemeChange = () => {
    toggleTheme();
    setCurrentTheme(getThemeLocalStorage());
  };

  return (
    <>
      <button
        onClick={handleThemeChange}
        className={clsx({
          [classNames.button]: true,
          [classNames.buttonOn]: currentTheme === 'light',
          [classNames.buttonOff]: currentTheme !== 'light',
        })}
      >
        <span className={clsx(classNames.pin)} />
      </button>
    </>
  );
};

export default ThemeSwitch;
