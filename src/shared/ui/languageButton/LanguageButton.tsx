import React, { useContext, FC } from 'react';
import { Button } from '@mui/material';
import { resource } from '../../../app/localization/resources';
import { LanguageContext } from '../../../app/context/LanguageContext';


interface IlanguageButton {
    text: boolean;
}

const LanguageButton: FC<IlanguageButton> = ({text}) => {
    const { language, i18n, setLanguage } = useContext(LanguageContext)
    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ru' : 'en');
    };
    return (
        <>
        <Button onClick={toggleLanguage} variant="contained">{resource[language].components.testLanguage.text}</Button>
        </>
    );
};

export default LanguageButton;
