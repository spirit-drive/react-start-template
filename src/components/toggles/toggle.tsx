import React, { FC, useState, createContext } from 'react';
import './toggle.css';

export interface ToggleProps {
  theme?: string;
  func: (e: any) => void;
}

export const Toggle: FC<ToggleProps>  = ({ theme, func }) => {

  const onClick = (e: any) => {
    func(e);
  };

  return (
    <label className="toggle">
      <input className="toggle__checkbox" type="checkbox"
        checked={theme === 'dark'}
        onChange={onClick}
      />
      <div className="toggle__conteiner">
        <div className="toggle__slider"></div>
      </div>
    </label>
  );
}
