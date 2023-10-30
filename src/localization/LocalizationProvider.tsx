import React, {
    createContext,
    useCallback,
    useContext,
    Dispatch,
    SetStateAction,
    useInsertionEffect,
    useMemo,
    useState,
    PropsWithChildren,
} from 'react';
import { useTranslation } from 'react-i18next';
import { LANG_STORAGE_KEY, Locale } from './settings';

type SetStateType<T> = Dispatch<SetStateAction<T>>;

type LangContextType = {
    lang: Locale;
    toggleLang: () => void;
    setLang: SetStateType<Locale>;
};

type LangProviderProps = {
    children: React.ReactNode;
};

const LangContext = createContext<LangContextType>({} as LangContextType);

export const useLangContext = (): LangContextType => useContext(LangContext);

export const LangProvider = ({ children }: PropsWithChildren<LangProviderProps>) => {
    const { i18n } = useTranslation();

    const [lang, setLang] = useState<Locale>(() => (localStorage.getItem(LANG_STORAGE_KEY) as Locale) || Locale.ru);

    useInsertionEffect(() => {
        localStorage.setItem(LANG_STORAGE_KEY, lang);
        const html = document.body.parentElement;
        html.lang = lang;
        i18n.changeLanguage(lang);
    }, [lang]);

    const toggleLang = useCallback(() => setLang((lang) => (lang === Locale.ru ? Locale.en : Locale.ru)), []);

    const value = useMemo(() => ({ lang, toggleLang, setLang }), [lang, toggleLang, setLang]);

    return (
        <LangContext.Provider value={value}>
            <div>{children}</div>
        </LangContext.Provider>
    );
};
