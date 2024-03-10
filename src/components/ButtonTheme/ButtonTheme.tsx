import React, { FC, useContext, useState } from 'react';
import * as styles from './styles.module.scss';
import { ThemeContext } from '../Provider/ThemeProvider';
import { useTranslation } from 'react-i18next';


interface ButtonThemeProps {

  size?: string;
  label: string;
  onClick?:() => void;
}

export const ButtonTheme: FC<{}> = () => {

const [theme, setTheme] = useContext(ThemeContext) ;
const { t } = useTranslation()

  const toggleTheme = () => {
    setTheme((prev: string) => (prev === 'light' ? 'dark' : 'light'));
  };
  return (
    <div>
      <button
        type="button"
        className={theme === 'dark'? styles.storyDark :styles.story}
        onClick={toggleTheme}
       // {...props}
      >
        {t('button.theme')+ (theme === 'light' ? t('button.dark') : t('button.light'))}
      </button>
    </div>
  );
};
