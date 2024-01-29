import React from 'react';
import { useLanguage } from '../../helper/useLanguage';

const LanguageSwitch = () => {
  const { toggleLanguage, language } = useLanguage();

  const handleChange = (): void => {
    toggleLanguage();
  };

  return (
    <>
      <button onClick={handleChange}>{language === 'en' ? 'EN' : 'RU'}</button>
    </>
  );
};

export default LanguageSwitch;
