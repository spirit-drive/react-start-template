export const setThemeLocalStorage = (theme: string): void => {
  localStorage.setItem('theme', theme);
};

export const getThemeLocalStorage = (): string => {
  return localStorage.getItem('theme');
};

export const setLanguageLocalStorage = (language: string): void => {
  localStorage.setItem('language', language);
};

export const getLanguageLocalStorage = (): string => {
  return localStorage.getItem('language');
};
