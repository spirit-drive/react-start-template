import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useMemo, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextProps {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

const authContextDefault: AuthContextProps = {
  isAuth: false,
  setIsAuth: () => {
    false;
  },
};

export const AuthContext = createContext(authContextDefault);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>();

  const providerValue = useMemo(
    () => ({
      isAuth,
      setIsAuth,
    }),
    [isAuth]
  );

  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
};
