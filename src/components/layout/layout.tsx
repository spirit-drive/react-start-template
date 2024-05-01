import React, { FC, useState, createContext, useEffect, useContext } from 'react';
import '../layout/layout.css';
import { Route } from 'react-router';
import OperationScreen from '../../screens/operationScreen/operationScreen';
import { ProfileScreen } from '../../screens/profileScreen/profileScreen';
import { RouterProvider } from './provider/RouterProvider';
import { CommonScreen } from '../../screens/commonScreen/commonScreen';
import { CreateOperationForm } from '../../screens/operationScreen/ui/create/createOperationForm';
import { Modal } from '../modal/modal';
import { AuthProvider } from '../../components/layout/provider/AuthProvider';
import { Provider } from 'react-redux';
import { store } from '../../store/configureStore';
import { AuthScreen } from '../../screens/authScreen/authScreen';

export interface layoutProps {
  prop?: string;
}

const ThemeContext = createContext(null);

export const Layout: FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={theme}>
      <Provider store={store}>
        <AuthProvider>
          <RouterProvider>
            <Route path="" element={<AuthScreen />} />
            <Route path="/" element={<CommonScreen />}>
              <Route path="profile" element={<ProfileScreen />} />
              <Route path="operations" element={<OperationScreen />} />
              <Route path="operations/add" element={<Modal>{<CreateOperationForm />}</Modal>} />
            </Route>
          </RouterProvider>
        </AuthProvider>
      </Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
