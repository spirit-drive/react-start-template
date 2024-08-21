import React, { createContext, SetStateAction, useState, ReactNode, FC, Dispatch, useEffect } from "react";
import {  ThemeProvider } from '@mui/material/styles';
import { darkTheme } from "../themes/Theme";
import { lightTheme } from "../themes/Theme";

interface IThemeProviderProps {
    children: ReactNode;
}

interface IThemeContext {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<IThemeContext>({ theme: '', setTheme: () => {} });


export const MyThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
    const localTheme = localStorage.getItem("theme")
    const [theme, setTheme] = useState(localTheme ||"light")

    useEffect(()=> {
        localStorage.setItem("theme", theme)
    },[theme])

    //const token = localStorage.getItem("myToken")
    return <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
}

