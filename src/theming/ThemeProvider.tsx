import React, { ReactNode, FC, createContext, useEffect, ReactElement } from "react";
import { Theme } from "./types";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ThemeContext = createContext([]);

interface ThemeProviderProps {
    children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }): ReactElement => {
    const [theme, setTheme] = useLocalStorage(Theme.key, Theme.light);
    useEffect(() => {
        let docsSb = document.getElementsByClassName("innerZoomElementWrapper")[0]
        if (theme === Theme.dark) {
            if (docsSb ) {
                docsSb.classList.add(Theme.dark);
            } else {
                document.body.classList.add(Theme.dark);
            }
        } else {
            if (docsSb ) {
                docsSb.classList.remove(Theme.dark);
            } else {
                document.body.classList.remove(Theme.dark);
            }
        }
    }, [theme]);
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};