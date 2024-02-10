import React, { FC, useContext, useState } from 'react';
import { LoginContexType, LoginContext } from './contexts';

type useProviderType = {
  children: React.ReactNode;
};

export const useLogin = (): LoginContexType => {
  const context: LoginContexType = useContext(LoginContext);
  if (!useContext) throw new Error('useLogin must be used within a LoginProvider');
  return context;
};

export const LoginProvider: FC<useProviderType> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleIsLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <LoginContext.Provider value={{ isLogin, toggleIsLogin } as LoginContexType}>{children}</LoginContext.Provider>
  );
};
