import React, { FC, useContext } from 'react';
import { WiMoonAltWaningCrescent4, WiDaySunny } from 'react-icons/wi';
import ThemeContext from 'src/app/providers/theme/ThemeContext';

export const ThemeSwitcher: FC = () => {
  const { setLightTheme, setDarkTheme, theme } = useContext(ThemeContext);
  return (
    <div style={{ paddingRight: '10px' }}>
      {theme == 'light' && <WiDaySunny style={{ width: 28, height: 28 }} onClick={() => setDarkTheme()} />}
      {theme == 'dark' && (
        <WiMoonAltWaningCrescent4 style={{ width: 28, height: 28 }} onClick={() => setLightTheme()} />
      )}
    </div>
  );
};
