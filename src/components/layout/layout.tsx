import React, { FC, useState, createContext, useEffect, useContext } from 'react';
import '../layout/layout.css';
import { Header } from '../header/header';
import { Navigate, Route } from 'react-router';
import OperationScreen from '../../screens/operationScreen/operationScreen';
import { ProfileScreen } from '../../screens/profileScreen/profileScreen';
import { RouterProvider } from '../../providers/RouterProvider';
import { Routes } from 'react-router';
import { CommonScreen } from 'src/screens/commonScreen/commonScreen';

export interface layoutProps {
  prop?: string;
}

const ThemeContext = createContext(null);

export const Layout: FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={theme}>
      <RouterProvider>
        <Route path='/' element={
          <CommonScreen />
        }
        >
          <Route path='' element={<ProfileScreen />} />
          <Route path='operations' element={<OperationScreen />} />
        </Route>

      </RouterProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
