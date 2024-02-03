import React, { useState } from 'react';
import { Button } from '../button/Button';
import i18n from '../../i18n';

export const LanguageControlsButton = () => {
  const changelanguage = (data: string) => {
    i18n.changeLanguage(data);
    setLang(data);
  };
  const [lang, setLang] = useState(i18n.language);
  return (
    <>
      <div className="wrapper">
        {lang == 'ru' ? (
          <Button onClick={() => changelanguage('en')}>ENG</Button>
        ) : (
          <Button onClick={() => changelanguage('ru')}>RUS</Button>
        )}
      </div>
    </>
  );
};
