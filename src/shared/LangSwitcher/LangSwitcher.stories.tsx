import React from 'react';
import { LangSwitcher } from './LangSwitcher';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { LangProvider } from '../LangProvider/LangProvider';
import '../../i18n';

export default {
    title: "UI/LangSwitcher",
    component: LangSwitcher,
}

export const Default = () => {
    return (
        <ThemeProvider>
            <LangProvider>
                <LangSwitcher/>
            </LangProvider>
        </ThemeProvider>
    );
}