import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../app/redux/store';
import { Navigate, useLocation, Location } from 'react-router-dom';

export type NavigationState = {
  from?: Location;
};

export const ProtectedRoute: FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = useSelector<AppState, AppState['token']>((state) => state.token);
  const location = useLocation();
  if (token) return <>{children}</>;
  return <Navigate to="/auth" state={{ from: location } as NavigationState} replace />;
};
