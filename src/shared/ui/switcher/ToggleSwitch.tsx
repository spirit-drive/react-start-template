import React, { FC, useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../../app/context/LanguageContext';
import { resource } from '../../../app/localization/resources';

import { ThemeContext } from '../../../app/context/ThemeContext';
import './toggleSwitch.scss'

const ToggleSwitch = () => {
    const { language } = useContext(LanguageContext)
    const { theme, setTheme } = useContext(ThemeContext)
    const [isToggled, setIsToggled] = useState(false);

    const onToggle = () => {
        setIsToggled(toggle => !toggle)
    }

    useEffect(() => (setTheme(isToggled ? 'dark' : 'light')), [isToggled])

    return (
        <div className="switcher">
            <label htmlFor="changeTheme">{resource[language].components.header.theme}</label>
            <label className="toggle-switch">
                {/*<span className='toggle-label'>сменить тему</span>*/}
                <input id="changeTheme" type="checkbox" checked={isToggled} onChange={onToggle} />
                <span className="switch" />
            </label>
        </div>
    );
};

export default ToggleSwitch;
