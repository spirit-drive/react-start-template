import React, {FC, ReactNode, useEffect, useMemo, useState} from 'react';

type Theme = "light" | "dark";

interface IThemeContext {
    theme: Theme,
    toggleTheme: () => void
}

interface IThemeProvider {
    children: ReactNode
}

export const ThemeContext: React.Context<IThemeContext> = React.createContext({} as IThemeContext);
export const ThemeProvider: FC<IThemeProvider> = ({children}) => {
    // const isDarkSystemTheme: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // const setDefaultTheme: Theme = isDarkSystemTheme ? "dark" : "light"
    const [theme, setTheme] = useState<Theme>('light'/*setDefaultTheme*/);
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    const value: IThemeContext = useMemo((): IThemeContext => ({theme, toggleTheme}), [theme])

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};