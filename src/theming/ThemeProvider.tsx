import React, {
    SetStateAction,
    createContext,
    useState,
    Dispatch,
    PropsWithChildren,
    useContext,
    useInsertionEffect,
    useCallback,
    useMemo,
} from 'react';
import { Theme } from './types';
import '../styles/index.scss';

type SetStateType<T> = Dispatch<SetStateAction<T>>;

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: SetStateType<Theme>;
};

type ThemeProviderProps = {
    children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const useThemeContext = (): ThemeContextType => useContext(ThemeContext);

const KEY = 'theme';

export const ThemeProvider = ({ children }: PropsWithChildren<ThemeProviderProps>) => {
    const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(KEY) as Theme) || Theme.light);

    useInsertionEffect(() => {
        localStorage.setItem(KEY, theme);
        const html = document.body.parentElement;
        html.classList.add(theme);

        return () => html.classList.remove(theme);
    }, [theme]);

    const toggleTheme = useCallback(() => setTheme((v) => (v === Theme.light ? Theme.dark : Theme.light)), []);

    const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);

    return (
        <ThemeContext.Provider value={value}>
            <div>{children}</div>
        </ThemeContext.Provider>
    );
};
