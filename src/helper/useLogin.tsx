import React, { FC, useContext, useState } from 'react';
import { LoginContexType, LoginContext } from './contexts';
import { clearIsLoginLocalStorage, getIsLoginLocalStorage, setIsLoginLocalStorage } from '../helper/localStorage';

type useProviderType = {
  children: React.ReactNode;
};

export const useLogin = (): LoginContexType => {
  const context: LoginContexType = useContext(LoginContext);
  if (!useContext) throw new Error('useLogin must be used within a LoginProvider');
  return context;
};

export const LoginProvider: FC<useProviderType> = ({ children }) => {
  const loginUser: string = getIsLoginLocalStorage()
  const [isLogin, setIsLogin] = useState(!!loginUser);
  isLogin ? setIsLoginLocalStorage() : null
  const toggleIsLogin = () => {
    isLogin ? clearIsLoginLocalStorage() : null;
    setIsLogin(!isLogin);
  };

  return (
    <LoginContext.Provider value={{ isLogin, toggleIsLogin } as LoginContexType}>{children}</LoginContext.Provider>
  );
};
