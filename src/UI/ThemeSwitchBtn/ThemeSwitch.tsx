import React from 'react';
import { Context } from '../../app/Context';

import './theme-switch-btn.css';

interface ThemeSwitchBtnProps {
  isDark: boolean;
}

/**
 * Компонент "ThemeSwitchBtn"
 *
 * Служит для переключения светлой и темной темы в приложении
 */
export const ThemeSwitchBtn = ({ isDark }: ThemeSwitchBtnProps): React.ReactElement => {
  const { themeSwitchHandler } = React.useContext(Context);

  return (
    <button className="light-mode-btn" onClick={themeSwitchHandler}>
      <img
        width="15"
        height="15"
        src={
          isDark
            ? `https://img.icons8.com/ios-filled/100/FFFFFF/crescent-moon.png`
            : `https://img.icons8.com/ios-filled/100/sun--v1.png`
        }
        alt=""
      />
    </button>
  );
};
