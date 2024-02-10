import React, { createContext, useContext, useReducer } from 'react';

export type Action = 'light' | 'darck';
export type State = typeof defaultTheme;
export type Dispatch = (Action: Action) => void;

const defaultTheme = { theme: 'light' };
const ThemeContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

function themeReduser(state:State, action:Action) {
    switch (action) {
        case ('darck'):
            return {
                theme: 'darck'
            }
            break;
        case ('light'):
            return {
                theme: 'light'
            }
            break;
    }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(themeReduser, defaultTheme);

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useContext inside ThemeProvider !!!!');
  return context;
}
