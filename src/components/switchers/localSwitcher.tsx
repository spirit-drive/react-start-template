import { useTranslation } from "react-i18next";
import { supportedLngs } from '../../i18n/config';
import React, { FC } from 'react';
import  './localSwitcher.css';

export const LocaleSwitcher: FC = () => {
  const { i18n } = useTranslation(); 
  return (
      <select className="select"
        value={i18n.resolvedLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {Object.entries(supportedLngs).map(([code, name]) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
  );
};
