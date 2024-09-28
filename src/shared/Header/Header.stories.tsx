import React from 'react';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { LangProvider } from '../LangProvider/LangProvider';
import { Header } from './Header';
import '../../i18n';

export default {
    title: "UI/Header",
    component: Header,
}

export const Default = () => {
    return (
        <LangProvider>
            <ThemeProvider>
                <Header />
            </ThemeProvider>
        </LangProvider>
    )
}