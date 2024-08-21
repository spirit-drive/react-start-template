import React, { useContext } from 'react';
import { resource } from '../../../app/localization/resources';
import { ThemeContext } from '../../../app/context/ThemeContext';
import { LanguageContext } from '../../../app/context/LanguageContext';
import Logo from '../logo/Logo';
import ToggleSwitch from '../switcher/ToggleSwitch';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LanguageButton from '../languageButton/LanguageButton';
import { useSelector } from 'react-redux';
import { IRootState } from 'src/store/store'
import './header.scss';


const Header = () => {
    const { theme } = useContext(ThemeContext)
    const { language } = useContext(LanguageContext)
    const name = useSelector(((state: IRootState) => state.main.user?.name))



    return (
        <header className={'header ' + theme}>
            <Box className="header__container">
            <Typography sx={{ fontWeight: 700 }} variant="h5" >{name || ""}</Typography>
                <nav className="header__list df">
                    <NavLink to="/login" className={(props)=> props.isActive ? "header__li active" : "header__li"}  >{resource[language].components.header.login}</NavLink>
                    <NavLink to="/registration" className={(props)=> props.isActive ? "header__li active" : "header__li"}  >{resource[language].components.header.registration}</NavLink>
                    <NavLink to="/operations" className={(props)=> props.isActive ? "header__li active" : "header__li"}  >{resource[language].components.header.operations}</NavLink>
                    <NavLink to="/profile" className={(props)=> props.isActive ? "header__li active" : "header__li"}  >{resource[language].components.header.profile}</NavLink>
                </nav>
                <Box className='header__actions df'>
                    <ToggleSwitch />
                    <LanguageButton text={false} />
                </Box>

            </Box>
        </header>
    );
};

export default Header;
