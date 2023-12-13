import React, { FC, ReactElement } from 'react';
import { HeaderTop } from './HeaderTop';
import { HeaderMiddle } from './HeaderMiddle';
import { HeaderBottom } from './HeaderBottom';
import { ThemeProvider } from '../../theming/ThemeProvider';

/**
 * Компонент Header. Должен прилипать при прокрутке страницы и содержать компонент Logo
 */
export const Header: FC = (): ReactElement => {
  return (
    <ThemeProvider>
      <header>
        <HeaderTop />
        <HeaderMiddle />
      </header>
      <HeaderBottom />
    </ThemeProvider>
  );
};
