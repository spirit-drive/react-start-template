export type Language = 'en' | 'ru';

export interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  i18n: any
}