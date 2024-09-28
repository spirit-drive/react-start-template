export const  enum CURRENT_LANGUAGE {
    EN = 'en',
    RU = 'ru',
} 

export type TLangProviderProps = {
    children: React.ReactNode;
}

type State<T> = (value: ((prevState: T) => T) | T) => void;

export type TLangContext = {
    currentLang: CURRENT_LANGUAGE;
    setCurrentLang: State<CURRENT_LANGUAGE>;
}