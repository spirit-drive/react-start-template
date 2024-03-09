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

export const getIsLoginLocalStorage = ():string => {
  return localStorage.getItem('isLogin');
}

export  const setIsLoginLocalStorage = (): void => {
  localStorage.setItem('isLogin', 'login')
}

export  const clearIsLoginLocalStorage = (): void => {
  localStorage.removeItem('isLogin');
  removeEmailLocalStorage();
}

export const setEmailLocalStorage = (email: string): void => {
  localStorage.setItem('email', email );
}

export const getEmailLocalStorage = () => {
  return localStorage.getItem('email');
}

const removeEmailLocalStorage = () => {
  localStorage.removeItem('email');
}

export const setUserNameLocalStorage = (userName: string) => {
  localStorage.setItem('userName', userName);
}

export const getUserNameLocalStorage = () => {
  return localStorage.getItem('userName');
}