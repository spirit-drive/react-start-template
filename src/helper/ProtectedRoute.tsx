import React, { FC } from 'react';
import { Navigate, useLocation, Location } from 'react-router-dom';
import { ROUTER_PATH } from 'src/app/constants/router';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'src/features/Auth/service/user';

export type NavigationState = {
  from?: Location;
};

export const ProtectedRoute: FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuth = useSelector(getIsAuth);
  const location = useLocation();
  sessionStorage.setItem;
  if (isAuth) return <>{children}</>;
  console.warn('Authorization required', location);
  return <Navigate to={ROUTER_PATH.LOGIN} state={{ from: location } as NavigationState} replace />;
};
