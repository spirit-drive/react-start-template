import React, { useState } from 'react';
import { useLanguage } from '../../helper/useLanguage';
import { getLanguageLocalStorage } from '../../helper/localStorage';
import i18n from '../../helper/i18n';

const LanguageSwitch = () => {
  const { toggleLanguage, language } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(getLanguageLocalStorage());

  const handleChange = () => {
    toggleLanguage();
    setCurrentLanguage(getLanguageLocalStorage());
    i18n.changeLanguage(language);
  };

  return (
    <>
      <button onClick={handleChange}>{currentLanguage === 'en' ? 'EN' : 'RU'}</button>
    </>
  );
};

export default LanguageSwitch;
