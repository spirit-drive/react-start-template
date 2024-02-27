import React, { FC, createContext, useEffect, useState } from 'react';



const ThemeContext = createContext(null)
interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('light');
  // useEffect(() => {
  //   const appContainers = document.querySelectorAll('.app-container')[0]
  //   appContainers.classList.add(theme + '-mode')
  //   return () => {
  //     appContainers.classList.remove(theme + '-mode')
  //   };
  // }, [theme]);


  return (
    <ThemeContext.Provider value={ [theme, setTheme] }>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeProvider, ThemeContext }