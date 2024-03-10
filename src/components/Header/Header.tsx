import React, { FC, useContext } from 'react';
import * as styles from './styles.module.scss';
import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';
import { ButtonTheme } from '../ButtonTheme/ButtonTheme';
import { ThemeContext } from '../Provider/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { ButtonLang } from '../ButtonLang/ButtonLang';

interface HeaderProps {
  size?: string;
}


export const Header: FC<HeaderProps> = ({ size, ...props }) => {
  const [theme, ] = useContext(ThemeContext) ;
  const { t } = useTranslation()

  return (
    <header>
      <div className={styles.storybookHeader} style={theme === 'dark'?{backgroundColor: 'rgb(177, 189, 230)'}:{}}>
        <div>
          <Logo/>
          <h1>Antoneus Project</h1>
        </div>
        <div>
          <>
            <span className={styles.welcome}>
            {t('header.welcome')}
            </span>
            <Button size="small"  label="Log out" />
            <ButtonTheme/>
            <ButtonLang/>
          </>
        </div>
      </div>
    </header>
  );
};
