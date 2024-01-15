import React, { useState } from 'react';
import { useLanguage } from 'src/helper/useLanguage';
import { getLanguageLocalStorage } from 'src/helper/localStorage';

const LanguageSwitch = () => {
  const { toggleLanguage } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(getLanguageLocalStorage());

  const handleChange = () => {
    toggleLanguage();
    setCurrentLanguage(getLanguageLocalStorage());
  };

  return (
    <>
      <button onClick={handleChange}>{currentLanguage === 'ru' ? 'RU' : 'EN'}</button>
    </>
  );
};

export default LanguageSwitch;
