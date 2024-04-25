import React, { FC, useState, createContext, useEffect, useContext } from 'react';
import '../layout/layout.css';
import { Route } from 'react-router';
import OperationScreen from '../../screens/operationScreen/operationScreen';
import { ProfileScreen } from '../../screens/profileScreen/profileScreen';
import { RouterProvider } from '../../providers/RouterProvider';
import { CommonScreen } from '../../screens/commonScreen/commonScreen';
import { CreateOperationForm } from '../../screens/operationScreen/ui/create/createOperationForm';
import { Modal } from '../modal/modal';

export interface layoutProps {
  prop?: string;
}

const ThemeContext = createContext(null);

export const Layout: FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={theme}>
      <RouterProvider>
        <Route path="/" element={<CommonScreen />}>
          <Route path="" element={<ProfileScreen />} />
          <Route path="operations" element={<OperationScreen />} />
          <Route path="operations/add" element={<Modal>{<CreateOperationForm />}</Modal>} />
        </Route>
      </RouterProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
