import React, { FC, useContext} from 'react';
import ThemeContext from '../layout/layout';
import { Logo } from '../logo/logo';
import { LocaleSwitcher } from '../switchers/localSwitcher';
import  './header.css';
import { useTranslation } from "react-i18next";

export const Header: FC = () => {
  const { t  } = useTranslation();
  const theme = useContext(ThemeContext);

  return (
    <div className = { theme == 'dark' ? "dark": "light" }>
      <Logo />
      <div className="title">{t("title")}</div> 
      <LocaleSwitcher />
    </div>
  );
};
