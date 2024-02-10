import React from 'react';

import type { Dispatch, State } from '../../components/context/ThemeContext';
import { Button } from '../button/Button';

export type themeControlsButtonProps = {
  handler: Dispatch;
  themeType: State;
};

export const ThemeControlsButton = ({ handler, themeType }: themeControlsButtonProps) => {
  if (themeType.theme == 'light') {
    return (
      <Button type={'header'} theme={'darck'} onClick={() => handler('darck')}>
        darck theme
      </Button>
    );
  } else {
    return (
      <Button type={'header'} theme={'light'} onClick={() => handler('light')}>
        light theme
      </Button>
    );
  }
};
