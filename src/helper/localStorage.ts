export const setThemeLocalStorage = (theme: string): void => {
  localStorage.setItem('theme', theme);
};

export const getThemeLocalStorage = (): string => {
  return localStorage.getItem('theme');
};
